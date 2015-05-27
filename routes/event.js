var app = require('../app');
/**
 * events
 */


// POST admin registers a new user
exports.addEvent = function(req, res) {
	// Grab the input data
	var json = req.body;
// 	var start_time = new Date(json.startTime);
  var start_string = json.eventDate + ' ' + json.startTime.substring(12, 20);
  var end_string = json.eventDate + ' ' + json.endTime.substring(12, 20);
  console.log('start_string = ' + start_string);
  console.log('end_string = ' + end_string);
  
  app.knex('events').insert({
          title: json.eventName,
          description: json.eventDescription,
          budget: "",
          start_time: start_string,
          created_by: 1,
          end_time: end_string,
          location: json.eventLocation,
          event_type: 2
        })
        .into('events')

        .catch(function(error) {
          console.error(error);
        });
  return res.redirect('/');
};
