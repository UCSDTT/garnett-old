var pg = require('pg').native;
var conString = process.env.DATABASE_URL || "postgres://ttuser:ttuser@localhost:5432/" + local_database_name;
var client;
var query;

client = new pg.Client(conString);
client.connect();


/*query = client.query(createTableQuery);

query.on('end', function () {
  client.end();
});*/