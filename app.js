var express = require('express');
var app = express();

// Module dependencies
var connect = require('connect');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var morgan  = require('morgan');
var dotenv = require('dotenv');

//Dependencies for signin/authentication system
var passport = exports.passport =  require('passport');
var LocalStrategy = exports.LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

//Route variables
var auth = require('./routes/auth');
var admin = require('./routes/admin');
var dashboard = require('./routes/dashboard');

// Connect to the PostgreSQL database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'ttapp' TO ... IN OTHER PROJECTS
// PostgreSQL
dotenv.load();
var pg = require('pg');
var conString = process.env.DB_CREDENTIALS;
var knex = exports.knex = require('knex')({
  client: 'pg',
  connection: conString
});

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  function(username, password, done) {
    knex('members').where({
      username: username,
      password: password
    }).select('*')

    .then(function(rows) {
      console.log(rows.length + ' row(s) were received');
      if(rows.length === 0) {
        return done(null, false, { message: 'Incorrect user/password combination.' });
      } else {
        return done(null, {
          "id": rows[0].id,
          "firstname": rows[0].firstname,
          "username": rows[0].username
        });
      }
    })

    .catch(function(error) {
      return console.error('error making query', error);
    });
  }
));

// Derialize the user session by id
passport.serializeUser(function(user, done) {
  return done(null, user.id);
});

// Deserialize the user session by id
passport.deserializeUser(function(id, done) {
  knex('members').where({
        id: id,
      }).select('*')

      .then(function(rows) {
        return done(null, rows[0].firstname);
      });
});

// Simple route middleware to ensure user is authenticated.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

var port = process.env.PORT || 2014;

// all environments
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cookieParser('Theta Tau secret key'));
app.use(morgan('dev'));
app.use(session( {
  secret: 'Theta Tau',
  name: 'sid',
  cookie: { path: '/', httpOnly: true, secure: false, maxAge: null },
  saveUninitialized: true,
  resave: true
}));
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public', { redirect : false }));

// Add routes here
app.get('/', auth.loginView);
app.get('/login', auth.loginView);
app.get('/logout', ensureAuthenticated, auth.logoutView);
app.get('/admin', ensureAuthenticated, admin.adminViewHome);
app.get('/admin/add', ensureAuthenticated, admin.adminViewAdd);
app.get('/admin/update/:id', ensureAuthenticated, admin.adminViewUpdate);
app.get('/dashboard', ensureAuthenticated, dashboard.dashboardView);
app.get('/partials/:name', ensureAuthenticated, dashboard.partials);
app.get('*', ensureAuthenticated, dashboard.dashboardView);

app.post('/login',
  passport.authenticate('local', { successRedirect: '/dashboard',
                                   failureRedirect: '/login',
                                  failureFlash: true })
);

app.post('/admin/add', admin.addMember);
app.post('/admin/update/:id', admin.updateMember);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});