var app = require('../app');
/**
 * Dashboard page
 */

// GET Dashboard
exports.dashboardView = function(req, res) {
	// Redirect admins to console, regular users go to dashboard
	if(req.session.passport.user == 1) {
		return res.redirect('/admin');
	}
	else {
		return res.render('dashboard', {
			title: 'Dashboard',
			user: req.user
		});
	}
};