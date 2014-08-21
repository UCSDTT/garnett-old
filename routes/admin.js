var app = require('../app');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
/**
 * Admin page
 */

// GET admin console page
exports.adminViewHome = function(req, res) {
	// If user not logged in
	if(!req.user) {
    console.log("redirecting to login?");
		return res.redirect('login');
	}

  // If user is not admin
  if(req.session.passport.user !== 1) {
    console.log("redirecting cus not 1?");
    return res.redirect('/');
  }

  app.knex('members')
    .orderBy('id', 'asc')

    .then(function(rows) {
      console.log(rows.length + ' member(s) loaded.');
      var members = [];
      for (var i = 0; i < rows.length; i++){
        members.push({
          "member": rows[i]
        });
      }
      return res.render('admin', {
  			title: 'Theta Tau Management',
  			user: req.user,
  			data: members,
        seeTable: true
  	  });
    });
};

// Get the /admin/add view
exports.adminViewAdd = function(req, res) {
  // If user not logged in
  if(!req.user) {
    return res.redirect('login');
  }

  // If user is not admin
  if(req.session.passport.user !== 1) {
    return res.redirect('dashboard');
  }

  return res.render('admin', {
      title: 'Theta Tau Management',
      user: req.user,
      seeAdd: true
  });
};

// POST admin registers a new user
exports.addMember = function(req, res) {
	// If user not logged in
	if(!req.user) {
		return res.redirect('login');
	}

  // If user is not admin
  if(req.session.passport.user !== 1) {
    return res.redirect('dashboard');
  }

	// Grab the input data
	var json = req.body;

	//Check if primary key constraint for id is broken or unique username broken
  app.knex('members')
    .select('*')
    .where('id', json.reg_id)
    .orWhere('username', json.reg_username)

    .then(function(rows) {
      console.log(rows.length + ' rows loaded.');
      return rows.length;
    })
    .then(function(length){
      if( length === 0 ){
        console.log(json);
        return app.knex.insert(
          {firstname: json.reg_firstname,
          lastname: json.reg_lastname,
          username: json.reg_username,
          password: json.reg_password,
          email: json.reg_email,
          phonenumber: json.reg_phonenumber,
          startyear: json.reg_startyear,
          gradyear: json.reg_gradyear,
          major: json.reg_major,
          class: json.reg_class
        })
        .into('members')
        .catch(function(error) {
          console.error(error);
        });
      }
    });
  return res.redirect('/');
};

// Get admin/update/:id view
exports.adminViewUpdate = function(req, res) {
  // If user not logged in
  if(!req.user) {
    return res.redirect('login');
  }

  // If user is not admin
  if(req.session.passport.user !== 1) {
    return res.redirect('/');
  }

  // Reconnect to database if there is an error
  app.client.on('error', function(e) {
    app.client.connect();
  });

  // Check is argument is an int
  var id = req.params.id;
  if(isNaN(id)) {
    return res.redirect('admin');
  }
  else {
    // Get the member information and put into array
    var rows = [];
    var query = app.client.query("SELECT * FROM members WHERE id = $1", [id]);
    app.knex('members')
      .select('*')
      .where('id', id)

      .then(function(rows){
        var members = [];
        for (var i = 0; i < rows.length; i++){
          members.push({
            "member": rows[i]
          });
        }
        if(members.length === 0) {
          return res.redirect('admin');
        }
        else {
          // Render admin update page and pass the data
          return res.render('admin', {
            title: 'Theta Tau Management',
            user: req.user,
            data: members,
            seeUpdate: true,
            updateURL: ('/admin/update/' + members[0].member.id)
          });
        }
      });

    // // Add all members to rows array
    // query.on('row', function(row) {
    //   rows.push( {
    //     "member": row
    //   })
    // });

    // Fired once and only once, after the last row has been returned
    // and after all 'row' events are emitted
    // query.on('end', function(result) {
    //   // If no such member, then redirect to admin home
    //   if(result.rowCount === 0) {
    //     return res.redirect('admin');
    //   }
    //   else {
    //     // Render admin update page and pass the data
    //     return res.render('admin', {
    //       title: 'Theta Tau Management',
    //       user: req.user,
    //       data: rows,
    //       seeUpdate: true,
    //       updateURL: ('/admin/update/' + rows[0].member.id)
    //     });
    //   }
    // });
  }
};


// Execute UPDATE query on database to update a member
exports.updateMember = function(req, res) {
  // If user not logged in
  if(!req.user) {
    return res.redirect('login');
  }

  // If user is not admin
  if(req.session.passport.user != 1) {
    return res.redirect('dashboard');
  }

  // Reconnect to database if there is an error
  app.client.on('error', function(e) {
    app.client.connect();
  });

  // Grab the input data
  var json = req.body;

  // // Create the update member query
  // var updateQuery = "UPDATE members SET " +
  //             "firstname=$1, " +
  //             "lastname=$2, " +
  //             "password=$3, " +
  //             "email=$4, " +
  //             "phonenumber=$5, " +
  //             "startyear=$6, " +
  //             "gradyear=$7, " +
  //             "major=$8, " +
  //             "class=$9 " +
  //             "WHERE id=$10";

  // // Update 'members' in database 'ttapp'
  // var query1 = app.client.query(updateQuery,
  //             [json.up_firstname, json.up_lastname, json.up_password,
  //             json.up_email, json.up_phonenumber, json.up_startyear,
  //             json.up_gradyear, json.up_major, json.up_class,
  //             json.up_id]);

  // query1.on('end', function(result) {
  //   return res.redirect('admin');
  // });
  app.knex('members')
    .update(
      {firstname: json.reg_firstname,
      lastname: json.reg_lastname,
      username: json.reg_username,
      password: json.reg_password,
      email: json.reg_email,
      phonenumber: json.reg_phonenumber,
      startyear: json.reg_startyear,
      gradyear: json.reg_gradyear,
      major: json.reg_major,
      class: json.reg_class
    })
    .where('id', 0)
    .catch(function(error) {
      console.error(error);
    })
    .then(function(){
      res.redirect('admin');
    });
};