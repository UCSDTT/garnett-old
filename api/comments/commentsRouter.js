var express = require('express');
var commentsRouter = express.Router();
var commentsController = require('./commentsController');

/*
  GET
  /api/comments
  Returns all comments
*/
commentsRouter.route('/').get(function(req, res) {
  commentsController.getComments(req, res);
});

/*
  GET
  /api/comments/:commentid
  Returns comment with id = commentid
*/
commentsRouter.route('/:commentid').get(function(req, res) {
  commentsController.getComment(req, res);
});

module.exports = commentsRouter;