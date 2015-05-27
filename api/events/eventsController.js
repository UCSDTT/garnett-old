var app = require('../../app');

// List of query params:
// since - 'now'
// prev - [a datetime]
// next - [a datetime]

// total events must be even or else there will be a bug
var TOTAL_EVENTS = 10;
exports.getEvents = function(req, res) {
  if(Object.keys(req.query).length === 0) {
    console.log('here');
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
  } else {
    var query = req.query;
    // Default timeline ordering.
    // Get the 10 events closest to the current time, whether it has happened or
    // will happen. We want to try to distribute the number of events before
    // and after evenly (5 and 5)
    if(query.since && query.since == 'now') {
      var timeNow = new Date(Date.now());
      // First db query to get prior events
      app.knex('events')
        .where('start_time', '<', timeNow)
        .limit(TOTAL_EVENTS)
        .orderBy('start_time', 'desc')
        // Server error maybe
        .catch(function(error) {
          console.error(error);
          return res.status(500).json(error);
        })
        .then(function(eventsBefore) {
          console.log(eventsBefore.length + ' event(s) before now returned');

          // Second db query to get after events
          app.knex('events')
            .where('start_time', '>', timeNow)
            .limit(TOTAL_EVENTS)
            .orderBy('start_time', 'asc')
            // Server error maybe
            .catch(function(error) {
              console.error(error);
              return res.status(500).json(error);
            })
            .then(function(eventsAfter) {
              console.log(eventsAfter.length + ' event(s) after now returned');

              var resultObject = {};

              var numEventsBefore = eventsBefore.length;
              var numEventsAfter = eventsAfter.length;

              // temporary hacky way to build the resulting size 10 or lower array
              var resultEvents = [];

              if(numEventsBefore + numEventsAfter <= TOTAL_EVENTS) {
                // TODO test this case
                resultEvents = eventsBefore.reverse().concat(eventsAfter);
              } else if(numEventsBefore >= TOTAL_EVENTS/2 && numEventsAfter >= TOTAL_EVENTS/2) {
                resultEvents = eventsBefore.slice(0, TOTAL_EVENTS/2).reverse();
                resultEvents = resultEvents.concat(eventsAfter.slice(0, TOTAL_EVENTS/2));
              } else {
                // if two arrays are uneven
                if(numEventsBefore < TOTAL_EVENTS/2) {
                  // TODO test this case
                  resultEvents = eventsBefore.reverse();
                  resultEvents = resultEvents.concat(eventsAfter.slice(0, TOTAL_EVENTS - numEventsBefore));
                } else if(numEventsAfter < TOTAL_EVENTS/2) {
                  resultEvents = eventsBefore.slice(0, TOTAL_EVENTS - numEventsAfter).reverse();
                  resultEvents = resultEvents.concat(eventsAfter);
                }
              }

              // put events in returned object
              resultObject.data = resultEvents;

              // build the next and prev links if there are more events to show
              if(resultEvents.length === TOTAL_EVENTS) {
                var earliestDate = new Date(resultEvents[0].start_time);
                var latestDate = new Date(resultEvents[resultEvents.length-1].start_time);

                var prevUrl = 'http://' + req.hostname;
                if(req.hostname === 'localhost' || req.hostname === '127.0.0.1') {
                  prevUrl = prevUrl + ':' + req.app.settings.port;
                }
                prevUrl = encodeURI(prevUrl + '/api/events?prev=' + earliestDate);

                var nextUrl = 'http://' + req.hostname;
                if(req.hostname === 'localhost' || req.hostname === '127.0.0.1') {
                  nextUrl = nextUrl + ':' + req.app.settings.port;
                }
                nextUrl = encodeURI(nextUrl + '/api/events?next=' + latestDate);

                // put paging urls in returned object
                resultObject.paging = {};
                resultObject.paging.prev = prevUrl;
                resultObject.paging.next = nextUrl;
              }

              console.log(resultEvents.length + ' event(s) from events before and after now returned');
              console.log(resultObject);
              return res.status(200).json(resultObject);
            });

        });
    // following the prev link for pagination
    } else if(query.prev) {
      var beforeDate = query.prev;
      var resultObject = {};

      app.knex('events')
        .where('start_time', '<', new Date(beforeDate))
        .limit(TOTAL_EVENTS)
        .orderBy('start_time', 'asc')
        // Server error maybe
        .catch(function(error) {
          console.error(error);
          return res.status(500).json(error);
        })
        .then(function(resultEvents) {
          console.log(resultEvents.length + ' event(s) before ' + beforeDate + ' returned');
          // put events in returned object
          resultObject.data = resultEvents;

          // build the prev link if there are more events to show
          if(resultEvents.length === TOTAL_EVENTS) {
            var earliestDate = new Date(resultEvents[0].start_time);

            var prevUrl = 'http://' + req.hostname;
            if(req.hostname === 'localhost' || req.hostname === '127.0.0.1') {
              prevUrl = prevUrl + ':' + req.app.settings.port;
            }
            prevUrl = encodeURI(prevUrl + '/api/events?prev=' + earliestDate);

            // put paging url in returned object
            resultObject.paging = {};
            resultObject.paging.prev = prevUrl;
          }

          return res.json(resultObject);
        });
    } else if(query.next) {
      var latestDate = query.next;
      var resultObject = {};

      app.knex('events')
        .where('start_time', '>', new Date(latestDate))
        .limit(TOTAL_EVENTS)
        .orderBy('start_time', 'desc')
        // Server error maybe
        .catch(function(error) {
          console.error(error);
          return res.status(500).json(error);
        })
        .then(function(resultEvents) {
          console.log(resultEvents.length + ' event(s) after ' + query.next + ' returned');
          // put events in returned object
          resultObject.data = resultEvents;

          // build the next link if there are more events to show
          if(resultEvents.length === TOTAL_EVENTS) {
            var latestDate = new Date(resultEvents[0].start_time);

            var nextUrl = 'http://' + req.hostname;
            if(req.hostname === 'localhost' || req.hostname === '127.0.0.1') {
              nextUrl = nextUrl + ':' + req.app.settings.port;
            }
            nextUrl = encodeURI(nextUrl + '/api/events?next=' + latestDate);

            // put paging url in returned object
            resultObject.paging = {};
            resultObject.paging.next = prevUrl;
          }

          return res.json(resultObject);
        });
    } else {
      return res.json({});
    }
  }
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
  event.updated_on = Date.now().toISOString();
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