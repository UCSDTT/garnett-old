// Module dependencies
var flash = require('connect-flash');
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
// PostgreSQL
var pg = require('pg').native;

//Dependencies for signin/authentication system
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

//Route variables
var auth = require('./routes/auth');
var admin = require('./routes/admin');
var dashboard = require('./routes/dashboard');

// Connect to the PostgreSQL database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'ttapp' TO ... IN OTHER PROJECTS
var local_database_name = 'ttapp';
var conString = process.env.DATABASE_URL || 
                "postgres://ttuser:ttuser@localhost:5432/" + local_database_name;
var client = new pg.Client(conString);
client.connect();

console.log("Connected to DB");

// Serialize the user session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// Deserialize the user session
passport.deserializeUser(function(id, done) {
  var rows = [];

  // Reconnect to database if there is an error
  client.on('error', function(e) {
    client.connect(); 
  });

  // Find user by id
  var query = client.query("SELECT * " +
                           "FROM members WHERE id = " + id);
  query.on('row', function(row) {
    rows.push(row);
  }); 
  
  // Fired once and only once, after the last row has been returned 
  // and after all 'row' events are emitted
  query.on('end', function(result) {
    // rows[0].firstname becomes {{user}} in handlebars
    done(null, rows[0].firstname);
  });
});

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
app.use(express.cookieParser('Theta Tau secret key'));
app.use(express.methodOverride());
app.use(express.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( { 
  secret: 'Theta Tau', 
  name: 'sid', 
  cookie: { secure: true }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

// Check if username and pw input are correct by querying db
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    var rows = [];

    // Reconnect to database if there is an error
    client.on('error', function(e) {
      client.connect(); 
    });

    var query = client.query("SELECT * " +
                             "FROM members WHERE username = $1 AND password = $2",
                             [username, password]);
    query.on('row', function(row) {
      rows.push(row);
    });
    query.on('end', function(result) {
      // Fired once and only once, after the last row has been returned 
      // and after all 'row' events are emitted
      if(result.rowCount == 0) {
        return done(null, false, { message: 'Incorrect user/password combination.' });
      }
      else {
        return done(null, { 
          "id": rows[0].id,
          "firstname": rows[0].firstname,
          "username": rows[0].username
        });
      }
    });
  }
));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', auth.goToLogin);
app.get('/login', auth.loginView);
app.get('/logout', auth.logoutView);
app.get('/admin', admin.adminView);
app.get('/admin/add', admin.adminViewAdd)
app.get('/dashboard', dashboard.dashboardView);

app.post('/login',
  passport.authenticate('local', { successRedirect: '/dashboard',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);
app.post('/admin/add', admin.addMember);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


