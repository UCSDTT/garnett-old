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

exports.createMember = function(req, res) {
  var member = {};
  member.activeid = req.body.activeid;
  member.firstname = req.body.firstname;
  member.lastname = req.body.lastname;
  member.username = req.body.username;
  member.password = req.body.password;
  member.email = req.body.email;
  member.phonenumber = req.body.phonenumber;
  member.startyear = req.body.startyear;
  member.gradyear = req.body.gradyear;
  member.major = req.body.major;
  member.class = req.body.class;
  member.securityquestion = req.body.securityquestion;
  member.securityanswer = req.body.securityanswer;

  // Check if constraints for activeid and username are broken, then insert
  app.knex('members')
    .select('*')
    .where('activeid', member.activeid)
    .orWhere('username', member.username)

    .then(function(rows) {
      if( rows.length === 0 ){
        app.knex
          .insert(member)
          .into('members')
          .then(function(row) {
            console.log(row);
            res.json(row);
          });
      }
    });
};