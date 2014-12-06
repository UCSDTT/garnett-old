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

/* 
  POST
  /api/attending
  Adds new attendance record
*/
attendingRouter.route('/').post(function(req, res){
  attendingController.createAttendance(req, res);
});

/*
  DELETE
  /api/attending/:attendingid
  Deletes specified attendance record
*/
attendingRouter.route('/:attendingid').delete(function(req, res) {
  attendingController.deleteAttendance(req, res);
});

module.exports = attendingRouter;