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
  var member_id = req.params.memberid;
  app.knex('members').where('id', member_id)
    .then(function(row) {
      console.log(row);
      return res.json(row);
    });
};

exports.getMemberEventsCreated = function(req, res) {
  var member_id = req.params.memberid;
  app.knex('events').where('created_by', member_id)
    .orderBy('created_on', 'desc')
    .then(function(rows) {
      console.log(rows.length + ' events were created by member with id ' + member_id);
      return res.json(rows);
    });
};

exports.getMemberEventsAttending = function(req, res) {
  var member_id = req.params.memberid;
  var subquery = app.knex('attending')
    .where('member_id', member_id)
    .select('event_id');
  app.knex('events').where('id', 'in', subquery)
    .orderBy('created_on', 'desc')
    .then(function(rows) {
      console.log(rows.length + ' events attending by member with id ' + member_id);
      return res.json(rows);
    });
};

exports.createMember = function(req, res) {
  var member = {};
  
  // Get the request body
  member.active_id = req.body.active_id;
  member.first_name = req.body.first_name;
  member.last_name = req.body.last_name;
  member.username = req.body.username;
  member.password = req.body.password;
  member.email = req.body.email;
  member.phone_number = req.body.phone_number;
  member.start_year = req.body.start_year;
  member.grad_year = req.body.grad_year;
  member.major = req.body.major;
  member.class = req.body.class;
  member.security_question = req.body.security_question;
  member.security_answer = req.body.security_answer;

  // Check if member with active_id or username already exists, then insert
  app.knex('members')
    .select('*')
    .where('active_id', member.active_id)
    .orWhere('username', member.username)
    
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
    
    .then(function(rows) {
      // Insert since there is no duplicate member
      if( rows.length === 0 ) {
        app.knex
          .insert(member)
          .into('members')
          .then(function(row) {
            console.log(row);
            return res.json(row);
          });
      // Return duplicate status code and error message
      } else {
        var msg = {
          "error": "Duplicate member exists with active_id: " + 
                    member.active_id + " or username: " + member.username
        };
        return res.status(409).json(msg);
      }
    });
};

exports.updateMember = function(req, res) {
  var member_id = req.params.memberid;
  var member = {};
  
  // Get the body
  member.active_id = req.body.active_id;
  member.first_name = req.body.first_name;
  member.last_name = req.body.last_name;
  member.password = req.body.password;
  member.email = req.body.email;
  member.phone_number = req.body.phone_number;
  member.start_year = req.body.start_year;
  member.grad_year = req.body.grad_year;
  member.major = req.body.major;
  member.class = req.body.class;
  
  // Update appropriate member_id
  app.knex('members')
    .update(member)
    .where('id', member_id)
    
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
    
    // Respond with updated member
    .then(function(rows) {
      if(rows.length === 0) {
        var msg = {
          "error": "Could not find member to update"
        };
        return res.status(404).json(msg);
      } else {
        console.log(rows);
        return res.json(rows);
      }
    });
};