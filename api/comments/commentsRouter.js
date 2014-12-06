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

/*
  POST
  /api/comments
  Creates new comment
*/
commentsRouter.route('/').post(function(req, res){
  commentsController.createComment(req, res);
});

/*
  PUT
  /api/comments/:commentid
  Updates a comment
*/
commentsRouter.route('/:commentid').put(function(req, res){
  commentsController.updateComment(req, res);
});

/*
  DELETE
  /api/comments/:commentid
  Delete a comment
*/
commentsRouter.route('/:commentid').delete(function(req, res){
  commentsController.deleteComment(req, res);
});

module.exports = commentsRouter;