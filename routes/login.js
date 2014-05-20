/*
 * GET login page.
 */

exports.goToLogin = function(req, res) {
	res.redirect('login');
}

exports.loginView = function(req, res) {
	res.render('login');

};