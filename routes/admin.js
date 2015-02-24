var app = require('../app');
var request = require('superagent');
/**
 * Admin page
 */

// GET admin console page
exports.adminViewHome = function(req, res) {
  // If user is not admin
  if(req.session.passport.user !== 1) {
    return res.redirect('/dashboard');
  }

  var host = req.headers.host;
  request.get('http://' + host + '/api/members')
    .end(function(err, resp) {
      var rows = JSON.parse(JSON.stringify(resp.body));
      if(err || rows[0].error ) {
        console.error(err);
        return res.render('login');
      } else {
        return res.render('admin', {
          title: 'Theta Tau Management',
          user: req.user,
          data: rows[0].data,
          seeTable: true
        });
      }
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

  var host = req.headers.host;
  request.post('http://' + host + '/api/members')
    .send({
      active_id: json.reg_activeid,
      first_name: json.reg_firstname,
      last_name: json.reg_lastname,
      username: json.reg_username,
      password: json.reg_password,
      email: json.reg_email,
      phone_number: json.reg_phonenumber,
      start_year: json.reg_startyear,
      grad_year: json.reg_gradyear,
      major: json.reg_major,
      class: json.reg_class
    })
    .end(function(err, resp) {
      if(err) {
        console.error(err);
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
  var host = req.headers.host;

  request.get('http://' + host + '/api/members/' + id)
    .end(function(err, resp) {
      var row = JSON.parse(JSON.stringify(resp.body));
      console.log(row[0].data);
      if(err || row[0].error) {
        console.error(err);
        return res.redirect('/admin');
      } else {
        // Render admin update page and pass the data
        return res.render('admin', {
          title: 'Theta Tau Management',
          user: req.user,
          data: row[0].data,
          seeUpdate: true,
          updateURL: ('/admin/update/' + row[0].data.id)
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

  var host = req.headers.host;
  request.put('http://' + host + '/api/members/' + json.up_id)
    .send({
      active_id: json.up_activeid,
      first_name: json.up_firstname,
      last_name: json.up_lastname,
      password: json.up_password,
      email: json.up_email,
      phone_number: json.up_phonenumber,
      start_year: json.up_startyear,
      grad_year: json.up_gradyear,
      major: json.up_major,
      class: json.up_class
    })
    .end(function(err, resp) {
      if(err) {
        console.error(err);
      }
      return res.redirect('/admin');
    });
};