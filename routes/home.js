
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

	models.Project
		.find()
		.sort('date')
		.exec(renderProjects);

	function renderProjects(err, projects) {
		console.log(projects);
		res.render('index', { 'projects': projects });
	}

};