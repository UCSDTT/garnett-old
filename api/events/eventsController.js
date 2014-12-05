var app = require('../../app');

exports.getEvents = function(req, res) {
  app.knex('events')
    .orderBy('id', 'asc')
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(rows) {
      console.log(rows.length + ' event(s) returned');
      return res.json(rows);
    });
};

exports.getEvent = function(req, res) {
  var event_id = req.params.eventid;
  app.knex('events')
    .where('id', event_id)
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(row){
      console.log(row);
      return res.json(row);
    });
};

exports.getEventComments = function(req, res) {
  var event_id = req.params.eventid;
  app.knex('comments')
    .where('event_id', event_id)
    .orderBy('created_on', 'desc')
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(rows) {
      console.log(rows.length + ' comment(s) returned for event with id ' + event_id);
      return res.json(rows);
    });
};

exports.getEventAttendees = function(req, res) {
  var event_id = req.params.eventid;
  var subquery = app.knex('attending')
    .where('event_id', event_id)
    .select('member_id');
    
  app.knex('members')
    .where('id', 'in', subquery)
    .orderBy('first_name', 'asc')
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(rows) {
      console.log(rows.length + ' people attending event with id ' + event_id);
      return res.json(rows);
    });
};

exports.createEvent = function(req, res) {
  var event = {};

  // Get the request body
  event.title = req.body.title;
  event.description = req.body.description;
  event.budget = req.body.budget;
  event.start_time = req.body.start_time;
  event.created_by = req.body.created_by;
  event.end_time = req.body.end_time;
  event.location = req.body.location;
  event.updated_on = req.body.updated_on;
  event.event_type = req.body.event_type;

  app.knex
    .insert(event)
    .returning('id')
    .into('events')
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(row) {
      var msg = [{
        "id": row[0],
        "message": "Created new event"
      }];
      return res.status(201).json(msg);
    });
};

// Special rule: only the member who created the event can update
exports.updateEvent = function(req, res) {
  var event_id = req.params.eventid;
  var event = {};
  
  // Get the body, do not updated created_by field
  event.title = req.body.title;
  event.description = req.body.description;
  event.budget = req.body.budget;
  event.start_time = req.body.start_time;
  event.end_time = req.body.end_time;
  event.location = req.body.location;
  event.updated_on = Date.now().toISOString();
  event.event_type = req.body.event_type;
  
  // TODO: Update the event ONLY IF this user is the creator
  app.knex('events')
    .update(event)
    .returning('id')
    .where('id', event_id)
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
     // Check if we were able to update the event
    .then(function(rows) {
      if(rows.length === 0) {
        var msg = [{
          "error": "Could not find event to update"
        }];
        return res.status(404).json(msg);
        
      } else {
        var msg2 = [{
          "id": rows[0],
          "message": "Updated existing event"
        }];
        return res.status(200).json(msg2);
      }
    });
};

exports.deleteEvent = function(req, res) {
  var event_id = req.params.eventid;
  
  // Delete event id
  app.knex('events')
    .where('id', event_id)
    .del()
    .returning('id')
    // Server error maybe
    .catch(function(error) {
      console.error(error);
      return res.status(500).json(error);
    })
    // Check if we were able to delete event
    .then(function(rows) {
      if(rows.length === 0) {
        var msg = [{
          "error": "Could not find event to delete"
        }];
        return res.status(404).json(msg);
        
      } else {
        var msg2 = [{
          "id": rows[0],
          "message": "Deleted a event"
        }];
        return res.status(200).json(msg2);
      }
    });
};