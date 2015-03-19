var app = require('../app');
/**
 * events
 */


// POST admin registers a new user
exports.addEvent = function(req, res) {
	// Grab the input data
	var json = req.body;

	//Check if primary key constraint for id is broken or unique username broken
  app.knex('events').insert({
          title: json.eventName,
          description: json.description,
          budget: "",
          start_time: "2011-05-16T19:33:33.000Z",
          created_by: 1,
          end_time: '2011-05-16T19:33:33.000Z',
          location: "",
          event_type: 2
        })
        .into('events')

        .catch(function(error) {
          console.error(error);
        });
  return res.redirect('/');
};
