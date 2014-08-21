var app = require('../app');
/**
 * User authentication routing
 */
// Redirect to login
exports.goToLogin = function(req, res) {
	res.redirect('login');
};

// GET login page
exports.loginView = function(req, res) {
	// If session exists for a user already,
	if(req.user) {
		return res.redirect('dashboard');
	}
	// Render login page and pass variables to handlebars
  return res.render('login', {
		title: 'Theta Tau UCSD'
	});
};

// Logout session
exports.logoutView = function(req, res) {
	req.logout();
  res.redirect('/login');
};