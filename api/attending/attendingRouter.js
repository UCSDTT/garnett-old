var express = require('express');
var attendingRouter = express.Router();
var attendingController = require('./attendingController');

/*
  GET
  /api/attending
  Returns all attending rows
*/
attendingRouter.route('/').get(function(req, res) {
  attendingController.getAttending(req, res);
});

/*
  GET
  /api/attending/:attendingid
  Returns attending with id = attendingid
*/
attendingRouter.route('/:attendingid').get(function(req, res) {
  attendingController.getOneAttending(req, res);
});

module.exports = attendingRouter;