var pg = require('pg').native;
var conString = process.env.DATABASE_URL || "postgres://ttuser:ttuser@localhost:5432/" + local_database_name;
var client;
var query;

client = new pg.Client(conString);
client.connect();

var insertAdminQuery = "INSERT INTO members(id, firstname, lastname, username, password) VALUES(0, 'adminuser', 'adminuser', 'ttadmin', 'ttadmin')";

/*var createTableQuery = "CREATE TABLE members (" +
                          "id                 int  NOT NULL," +
                          "firstname            varchar(50) NOT NULL," +
                          "lastname             varchar(50) NOT NULL," +
                          "username             varchar(50) NOT NULL," +
                          "password             varchar(50) NOT NULL," +
                          "email                varchar(50)," +
                          "phonenumber          varchar(20)," +
                          "startyear        varchar(4)," +
                          "gradyear         varchar(4)," +
                          "major                varchar(20)," +
                          "class                varchar(20)," +
                          "securityquestion     varchar(60)," +
                          "securityanswer       varchar(60)," +
                          "CONSTRAINT pk_members PRIMARY KEY ( id )" +
                        ")";*/
query = client.query(createTableQuery);

query.on('end', function () {
  client.end();
});