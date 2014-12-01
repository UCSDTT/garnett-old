var express = require('express');
var eventsRouter = express.Router();
var eventsController = require('./eventsController');

/*
  GET
  /api/events
  Returns all events
*/
eventsRouter.route('/').get(function(req, res){
    eventsController.getEvents(req, res);
});


/*
  GET
  /api/events/:eventid
  Returns event with id = eventid
*/
eventsRouter.route('/:eventid').get(function(req, res){
    eventsController.getEvent(req, res);
});


/*
  GET
  /api/events/:eventid/comments
  Returns all comments associated with event whose id = eventid
*/
eventsRouter.route('/:eventid/comments').get(function(req, res){
    eventsController.getEventComments(req, res); 
});


/*
  GET
  /api/events/:eventid/attending
  Returns all attendees associated with event whose id = eventid
*/
eventsRouter.route('/:eventid/attending').get(function(req, res){
    eventsController.getEventAttendees(req, res);
});


module.exports = eventsRouter;

