/**
 * Dashboard page
 */

// GET Dashboard
exports.dashboardView = function(req, res) {
	// If no user is logged in, force login page
	if(!req.user) {
		res.redirect('login');
	}

	// Redirect admins to console, regular users go to dashboard
	if(req.session.passport.user == 0) {
		res.redirect('/admin');
	}
	else {
		res.render('dashboard', {
			title: 'Dashboard',
			user: req.user
		});
	}
};