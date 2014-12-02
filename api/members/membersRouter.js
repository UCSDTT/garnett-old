var express = require('express');
var membersRouter = express.Router();
var membersController = require('./membersController');

/*
  GET
  /api/members
  Returns all members
*/
membersRouter.route('/').get(function(req, res) {
  membersController.getMembers(req, res);
});

/*
  GET
  /api/members/:memberid
  Returns member with id = memberid
*/
membersRouter.route('/:memberid').get(function(req, res) {
  membersController.getMember(req, res);
});

/*
  GET
  /api/members/:memberid/events/createdby
  Returns all events created by member whose id = memberid
*/
membersRouter.route('/:memberid/events/created').get(function(req, res) {
  membersController.getMemberEventsCreated(req, res); 
});

/*
  GET
  /api/members/:memberid/events/attending
  Returns all events that the member is attending whose id = memberid
*/
membersRouter.route('/:memberid/events/attending').get(function(req, res) {
  membersController.getMemberEventsAttending(req, res);
});

/*
  POST
  /api/members
  Creates a new member given an input body
*/
membersRouter.route('/').post(function(req, res) {
  membersController.createMember(req, res);
});

module.exports = membersRouter;