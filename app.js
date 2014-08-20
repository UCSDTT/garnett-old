var express = require('express');
var app = express(); 

// Module dependencies
var connect        = require('connect');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var morgan  = require('morgan');

// PostgreSQL
var pg = require('pg').native;

//Dependencies for signin/authentication system
var passport = exports.passport =  require('passport')
var LocalStrategy = exports.LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

//Route variables
var auth = require('./routes/auth');
var admin = require('./routes/admin');
var dashboard = require('./routes/dashboard');


// Connect to the PostgreSQL database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'ttapp' TO ... IN OTHER PROJECTS
var conString = "postgres://ttuser:ttuser@192.241.220.164/ttadmin";
var client = exports.client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log("Connected to DB at " + result.rows[0].theTime);
    //client.end();
  });
});

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
    function(username, password, done) {
      var query = client.query("SELECT * " + "FROM members WHERE username = $1 AND password = $2", [username, password]);
      query.on('row', function(row, result) {
        console.log("grabbing row");
        result.addRow(row);
      });
      query.on('end', function(result) {
        // Fired once and only once, after the last row has been returned
        // and after all 'row' events are emitted
        console.log(result.rows.length + ' row(s) were received');
        if(result.rows.length === 0) { 
          return done(null, false, { message: 'Incorrect user/password combination.' });
        }
        else {
          return done(null, {
            "id": result.rows[0].id,
            "firstname": result.rows[0].firstname,
            "username": result.rows[0].username
          });
        }
      });
    }
  )); 

passport.serializeUser(function(user, done) {
  console.log(user);
  return done(null, user.id);
});

// Deserialize the user session
passport.deserializeUser(function(id, done) {

  // Reconnect to database if there is an error
  client.on('error', function(e) {
    client.connect();
  });

  // Find user by id
  var query = client.query("SELECT * " +
                           "FROM members WHERE id = " + id);
  query.on('row', function(row, result) {
    result.addRow(row);
  });

  // Fired once and only once, after the last row has been returned
  // and after all 'row' events are emitted
  query.on('end', function(result) {
    // rows[0].firstname becomes {{user}} in handlebars
    return done(null, result.rows[0].firstname);
  });
});

var port = process.env.PORT || 2014;
// all environments
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
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
app.use(express.static(path.join(__dirname, 'public')));

// Add routes here
app.get('/', dashboard.dashboardView);
app.get('/login', auth.loginView);
app.get('/logout', auth.logoutView);
app.get('/admin', admin.adminViewHome);
app.get('/admin/add', admin.adminViewAdd);
app.get('/admin/update/:id', admin.adminViewUpdate);
app.get('/dashboard', dashboard.dashboardView);

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


