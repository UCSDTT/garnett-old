/**
 * Admin page
 */
var app = require('../app');

// GET admin console page
exports.adminViewHome = function(req, res) {
	// If user not logged in
	if(!req.user) {
		res.redirect('login');
	}

  // If user is not admin
  if(req.session.passport.user !== 0) {
    res.redirect('/');
  }

	// Reconnect to database if there is an error
	app.client.on('error', function(e) {
  	app.client.connect();
  });

    // Get all members
	var query = app.client.query("SELECT * FROM members ORDER BY id");
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

// Get the /admin/add view
exports.adminViewAdd = function(req, res) {
  // If user not logged in
  if(!req.user) {
    res.redirect('login');
  }

  // If user is not admin
  if(req.session.passport.user !== 0) {
    res.redirect('/');
  }

  res.render('admin', {
      title: 'Theta Tau Management',
      user: req.user,
      seeAdd: true
  });
};

// POST admin registers a new user
exports.addMember = function(req, res) {
	// If user not logged in
	if(!req.user) {
		res.redirect('login');
	}

  // If user is not admin
  if(req.session.passport.user !== 0) {
    res.redirect('/');
  }

	// Reconnect to database if there is an error
	app.client.on('error', function(e) {
  	app.client.connect();
  });

	// Grab the input data
	var json = req.body;

	// Check if primary key constraint for id is broken or unique username broken
	var query0 = app.client.query("SELECT * FROM members WHERE id = $1 OR username = $2", [json.reg_id, json.reg_username]);

  /**======================
   * NOTE TO SELF: Nesting queries like this might be causing memory leak warning
   * ======================
   */
	query0.on('end', function(result) {
		// If the desired id or username is not already in the db
		if(result.rowCount === 0) {
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
			var query1 = app.client.query(insertQuery,
									[json.reg_id, json.reg_firstname, json.reg_lastname,
									 json.reg_username, json.reg_password, json.reg_email,
									 json.reg_phonenumber, json.reg_startyear, json.reg_gradyear,
									 json.reg_major, json.reg_class]);
		}
	});
  res.redirect('admin');
};

// Get admin/update/:id view
exports.adminViewUpdate = function(req, res) {
  // If user not logged in
  if(!req.user) {
    res.redirect('login');
  }

  // If user is not admin
  if(req.session.passport.user !== 0) {
    res.redirect('/');
  }

  // Reconnect to database if there is an error
  app.client.on('error', function(e) {
    app.client.connect();
  });

  // Check is argument is an int
  var id = req.params.id;
  if(isNaN(id)) {
    res.redirect('admin');
  }
  else {
    // Get the member information and put into array
    var rows = [];
    var query = app.client.query("SELECT * FROM members WHERE id = $1", [id]);

    // Add all members to rows array
    query.on('row', function(row) {
      rows.push( {
        "member": row
      })
    });

    // Fired once and only once, after the last row has been returned
    // and after all 'row' events are emitted
    query.on('end', function(result) {
      // If no such member, then redirect to admin home
      if(result.rowCount === 0) {
        res.redirect('admin');
      }
      else {
        // Render admin update page and pass the data
        res.render('admin', {
          title: 'Theta Tau Management',
          user: req.user,
          data: rows,
          seeUpdate: true,
          updateURL: ('/admin/update/' + rows[0].member.id)
        });
      }
    });
  }
};


// Execute UPDATE query on database to update a member
exports.updateMember = function(req, res) {
  // If user not logged in
  if(!req.user) {
    res.redirect('login');
  }

  // If user is not admin
  if(req.session.passport.user != 0) {
    res.redirect('/');
  }

  // Reconnect to database if there is an error
  app.client.on('error', function(e) {
    app.client.connect();
  });

  // Grab the input data
  var json = req.body;

  // Create the update member query
  var updateQuery = "UPDATE members SET " +
              "firstname=$1, " +
              "lastname=$2, " +
              "password=$3, " +
              "email=$4, " +
              "phonenumber=$5, " +
              "startyear=$6, " +
              "gradyear=$7, " +
              "major=$8, " +
              "class=$9 " +
              "WHERE id=$10";

  // Update 'members' in database 'ttapp'
  var query1 = app.client.query(updateQuery,
              [json.up_firstname, json.up_lastname, json.up_password,
               json.up_email, json.up_phonenumber, json.up_startyear,
               json.up_gradyear, json.up_major, json.up_class,
               json.up_id]);

  query1.on('end', function(result) {
    res.redirect('admin');
  });
};