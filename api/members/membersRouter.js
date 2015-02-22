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

/*
  PUT
  /api/members/:memberid
  Updates an existing member whose id = memberid
*/
membersRouter.route('/:memberid').put(function(req, res) {
  membersController.updateMember(req, res);
});

/*
  DELETE
  /api/members/:memberid
  Deletes an existing member whose id = memberid
  
  NOTE: This route is not required for Garnett but helps in our unit tests
*/
membersRouter.route('/:memberid').delete(function(req, res) {
  membersController.deleteMember(req, res);
});

/*
  POST
  /api/members/login
  Checks the username and password with the hashed password in db
*/
membersRouter.route('/login').post(function(req, res) {
  membersController.checkMember(req, res);
});

module.exports = membersRouter;