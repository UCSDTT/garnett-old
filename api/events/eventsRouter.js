var express = require('express');
var eventsRouter = express.Router();
var eventsController = require('./eventsController');

/*
  GET
  /api/events
  Returns all events
*/
eventsRouter.route('/').get(function(req, res) {
  eventsController.getEvents(req, res);
});

/*
  GET
  /api/events/:eventid
  Returns event with id = eventid
*/
eventsRouter.route('/:eventid').get(function(req, res) {
  eventsController.getEvent(req, res);
});

/*
  GET
  /api/events/:eventid/comments
  Returns all comments associated with event whose id = eventid
*/
eventsRouter.route('/:eventid/comments').get(function(req, res) {
  eventsController.getEventComments(req, res); 
});

/*
  GET
  /api/events/:eventid/attending
  Returns all attendees associated with event whose id = eventid
*/
eventsRouter.route('/:eventid/attending').get(function(req, res) {
  eventsController.getEventAttendees(req, res);
});

/*
  POST
  /api/events
  Creates a new event given an input body
*/
eventsRouter.route('/').post(function(req, res) {
  eventsController.createEvent(req, res);
});

/*
  PUT
  /api/events/:eventid
  Updates an existing event whose id = eventid
*/
eventsRouter.route('/:eventid').put(function(req, res) {
  eventsController.updateEvent(req, res);
});

/*
  DELETE
  /api/events/:eventid
  Deletes an existing event whose id = eventid
*/
eventsRouter.route('/:eventid').delete(function(req, res) {
  eventsController.deleteEvent(req, res);
});

module.exports = eventsRouter;