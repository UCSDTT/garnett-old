var app = require('../../app');

exports.getAttending = function(req, res) {
  app.knex('attending')
    .orderBy('id', 'asc')
    //Catch server error
    .catch(function(error){
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(rows) {
      console.log(rows.length + ' attending rows(s) returned');
      return res.json(rows);
    });
};


exports.getOneAttending = function(req, res) {
  var attending_id = req.params.attendingid;
  app.knex('attending').where('id', attending_id)
    //Catch server error
    .catch(function(error){
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(row) {
      console.log(row);
      return res.json(row);
    });
};


exports.createAttendance = function(req, res){
  var attendance = {};
  
  //Get the request body
  attendance.member_id = req.body.member_id;
  attendance.event_id = req.body.attending_id;
  
  app.knex
    .insert(attendance)
    .returning('id')
    .into('attendance')
    //Catch server error
    .catch(function(error){
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(row) {
      var msg = [{
        'id': row[0],
        'message': "added new attendee"
      }];
      return res.status(201).json(msg);
    });
};

exports.deleteAttendance = function(req, res){
  var attendance_id = req.params.attendance_id;
  
  //Delete attendance
  app.knex('attending')
    .where('id', attendance_id)
    .del()
    .returning('id')
    //Catch server error
    .catch(function(error) {
      console.error(error)
      return res.status(500).json(error);
    })
    .then(function(rows){
      if(rows.length === 0) {
        var msg_failure = [{
          'error': 'Could not find attendence record to delete'
        }];
        return res.status(404).json(msg_failure);
      } else {
        var msg_success = [{
          'id': rows[0],
          'message': 'Successfully removed attendence record'
        }];
        return res.status(200).json(msg_success);
      }
    });
};