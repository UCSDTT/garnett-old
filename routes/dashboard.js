/**
 * Dashboard page
 */

// GET Dashboard
exports.dashboardView = function(req, res) {
	// If no user is logged in, force login page
	if(!req.user) {
		return res.redirect('login');
	}
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