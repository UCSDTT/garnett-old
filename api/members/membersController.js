var app = require('../../app');

exports.getMembers = function(req, res) {
  app.knex('members')
    .orderBy('id', 'asc')
    .then(function(rows) {
      console.log(rows.length + ' member(s) returned');
      return res.json(rows);
    });
};

exports.getMember = function(req, res) {
  var memberid = req.params.memberid;
  app.knex('members').where('id', memberid)
    .then(function(row) {
      console.log(row);
      return res.json(row);
    });
};

exports.getMemberEventsCreated = function(req, res) {
  var memberid = req.params.memberid;
  app.knex('events').where('createdby', memberid)
    .orderBy('createdon', 'desc')
    .then(function(rows) {
      console.log(rows.length + ' events were created by member with id ' + memberid);
      return res.json(rows);
    });
};

exports.getMemberEventsAttending = function(req, res) {
  var memberid = req.params.memberid;
  var subquery = app.knex('attending')
    .where('memberid', memberid)
    .select('eventid');
  app.knex('events').where('id', 'in', subquery)
    .orderBy('createdon', 'desc')
    .then(function(rows) {
        console.log(rows.length + ' events attending by member with id ' + memberid);
        return res.json(rows);
    });
};