
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var login = require('./routes/login');
// Example route
// var user = require('./routes/user');

// Connect to the PostgreSQL database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'ThetaTau' TO ... IN OTHER PROJECTS
var local_database_name = 'ThetaTau';


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Theta Tau secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.goToLogin);
app.get('/login', login.loginView);
/*
app.get('/project/:id', project.projectInfo);
app.post('/project/new', project.addProject);
app.post('/project/:id/delete', project.deleteProject);
*/
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
