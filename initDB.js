var pg = require('pg').native;
var conString = process.env.DATABASE_URL || "postgres://ttuser:ttuser@localhost:5432/" + local_database_name;
var client;
var query;

client = new pg.Client(conString);
client.connect();

client.query("DROP TABLE members");

var createTableQuery = "CREATE TABLE members ( "+
  "id                 integer PRIMARY KEY NOT NULL,"+
  "firstname            text    NOT NULL,"+
  "lastname             text    NOT NULL,"+
  "username             text    UNIQUE NOT NULL,"+
  "password             text    NOT NULL,"+
  "email                text,"+
  "phonenumber          text,"+
  "startyear        integer,"+
  "gradyear         integer,"+
  "major                text    NOT NULL,"+
  "class                text    NOT NULL,"+
  "securityquestion     text,"+
  "securityanswer       text"+
")";

client.query(createTableQuery);

var query = client.query("INSERT INTO members(id, firstname, lastname, username, password, major, class)" +
  "VALUES(0, 'adminuser', 'adminuser', 'ttadmin', 'ttadmin', 'none', 'none')");

query.on('end', function () {
  client.end();
});

