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

module.exports = membersRouter;