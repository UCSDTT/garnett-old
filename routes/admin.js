/**
 * GET admin console
 */

// Connect to PostgreSQL database called ttapp
var pg = require('pg').native;
var local_database_name = 'ttapp';
var conString = process.env.DATABASE_URL || "postgres://ttuser:ttuser@localhost:5432/" + local_database_name;
var client = new pg.Client(conString);
client.connect();


// GET admin console page
exports.adminView = function(req, res) {
	// If user not logged in
	if(!req.user) {
		res.redirect('login');
	}


	// Reconnect to database if there is an error
	client.on('error', function(e) {
    	client.connect(); 
    });

    // Get all members
	var query = client.query("SELECT * FROM members");
	var rows = [];

	// Add all members to rows array
	query.on('row', function(row) {
		rows.push({
			"member": row 
		});
	});

	// Fired once and only once, after the last row has been returned 
    // and after all 'row' events are emitted
	query.on('end', function(result) {
    // Render admin page and pass the data
    res.render('admin', {
			title: 'Theta Tau Management',
			user: req.user,
			data: rows,
      seeTable: true
	  });
	});	
};

exports.adminViewAdd = function(req, res) {
  // If user not logged in
  if(!req.user) {
    res.redirect('login');
  }
  res.render('admin', {
      title: 'Theta Tau Management',
      user: req.user,
      seeAdd: true
  });
}

// POST admin registers a new user 
exports.addMember = function(req, res) {
	// If user not logged in
	if(!req.user) {
		res.redirect('login');
	}

	// Reconnect to database if there is an error
	client.on('error', function(e) {
    	client.connect(); 
    });

	// Grab the input data
	var json = req.body;

	// Check if primary key constraint for id is broken or unique username broken
	var query0 = client.query("SELECT * FROM members WHERE id = $1 OR username = $2", [json.reg_id, json.reg_username]);

	query0.on('end', function(result) {
		// If the desired id or username is not already in the db
		if(result.rowCount == 0) {
			// Create the insert member query
			var insertQuery = "INSERT INTO members( " +
						   		"id, " +
							   	"firstname, " +
							   	"lastname, " +
								  "username, " +
  								"password, " +
  								"email, " +
  								"phonenumber, " +
  								"startyear, " +
  								"gradyear, " +
  								"major, " +
  								"class) " +
  							  "VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";

			// Insert into table 'members' in database 'ttapp'
			var query1 = client.query(insertQuery, 
									[json.reg_id, json.reg_firstname, json.reg_lastname, 
									 json.reg_username, json.reg_password, json.reg_email,
									 json.reg_phonenumber, json.reg_startyear, json.reg_gradyear,
									 json.reg_major, json.reg_class]);
		}
	});

	// Get all members
	var query2 = client.query("SELECT * FROM members");
	var rows = [];

	// Ignore admin user, add all members to rows array
	query2.on('row', function(row) {
		rows.push({
			"member": row 
		});
	});

	// Fired once and only once, after the last row has been returned 
    // and after all 'row' events are emitted
	query2.on('end', function(result) {
    console.log(rows)
    console.log("rowCount: ", result.rowCount);

    // Render admin page and pass the data
    res.render('admin', {
			title: 'Theta Tau Management',
			user: req.user,
			data: rows,
      seeAdd: true
		});
	});	
}