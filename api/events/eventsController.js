var app = require('../../app');

exports.getEvents = function(req, res) {
  app.knex('events')
    .orderBy('id', 'asc')
    .then(function(rows){
      console.log(rows.length + ' event(s) returned');
      return res.json(rows);
    });
};

exports.getEvent = function(req, res) {
  var eventid = req.params.eventid;
  app.knex('events').where('id', eventid)
    .then(function(row){
      console.log(row);
      return res.json(row);
    });
};

exports.getEventComments = function(req, res) {
  var eventid = req.params.eventid;
  app.knex('comments').where('eventid', eventid)
    .orderBy('createdon', 'desc')
    .then(function(rows) {
      console.log(rows.length + ' comment(s) returned for event with id ' + eventid);
      return res.json(rows);
    });
};

exports.getEventAttendees = function(req, res) {
  var eventid = req.params.eventid;
  var subquery = app.knex('attending')
    .where('eventid', eventid)
    .select('memberid');
  app.knex('members').where('id', 'in', subquery)
    .orderBy('firstname', 'asc')
    .then(function(rows) {
      console.log(rows.length + ' people attending event with id ' + eventid);
      return res.json(rows);
    });
};
