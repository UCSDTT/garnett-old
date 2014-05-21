/**
 * User authentication routing
 */
var passport = require('passport');

// Redirect to login
exports.goToLogin = function(req, res) {
	res.redirect('login');
}

// GET login page 
exports.loginView = function(req, res) {
	// If session exists for a user already
	if(req.user) {
		res.redirect('dashboard');
	}

	var flash = req.flash();

	// Render login page and pass variables to handlebars
	res.render('login', {
		title: 'Theta Tau UCSD',
		errorMessage: ((Object.keys(flash).length > 0) ? flash.error[0] : undefined)
	});
};

// Logout session
exports.logoutView = function(req, res) {
	req.logout();
  	res.redirect('/login');
} 