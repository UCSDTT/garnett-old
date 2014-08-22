var app = require('../app');
/**
 * Admin page
 */

// GET admin console page
exports.adminViewHome = function(req, res) {
  // If user is not admin
  if(req.session.passport.user !== 1) {
    return res.redirect('/dashboard');
  }

  app.knex('members')
    .orderBy('id', 'asc')

    .then(function(rows) {
      console.log(rows.length + ' member(s) loaded.');
      return res.render('admin', {
  			title: 'Theta Tau Management',
  			user: req.user,
  			data: rows,
        seeTable: true
  	  });
    });
};

// Get the /admin/add view
exports.adminViewAdd = function(req, res) {
  // If user is not admin
  if(req.session.passport.user !== 1) {
    return res.redirect('/dashboard');
  }

  return res.render('admin', {
      title: 'Theta Tau Management',
      user: req.user,
      seeAdd: true
  });
};

// POST admin registers a new user
exports.addMember = function(req, res) {
  // If user is not admin
  if(req.session.passport.user !== 1) {
    return res.redirect('/dashboard');
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
      if( rows.length === 0 ){
        return app.knex.insert({
          firstname: json.reg_firstname,
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
  // If user is not admin
  if(req.session.passport.user !== 1) {
    return res.redirect('/');
  }

  var id = req.params.id;
  app.knex('members')
    .select('*')
    .where('id', id)

    .then(function(rows){
      if(rows.length === 0) {
        return res.redirect('/admin');
      }
      else {
        // Render admin update page and pass the data
        return res.render('admin', {
          title: 'Theta Tau Management',
          user: req.user,
          data: rows,
          seeUpdate: true,
          updateURL: ('/admin/update/' + rows[0].id)
        });
      }
    });
};


// Execute UPDATE query on database to update a member
exports.updateMember = function(req, res) {
  // If user is not admin
  if(req.session.passport.user != 1) {
    return res.redirect('/dashboard');
  }

  // Grab the input data
  var json = req.body;

  app.knex('members')
    .update({
      firstname: json.up_firstname,
      lastname: json.up_lastname,
      password: json.up_password,
      email: json.up_email,
      phonenumber: json.up_phonenumber,
      startyear: json.up_startyear,
      gradyear: json.up_gradyear,
      major: json.up_major,
      class: json.up_class
    })
    .where('id', json.up_id)

    .catch(function(error) {
      console.error(error);
    })

    .then(function(){
      return res.redirect('/admin');
    });
};