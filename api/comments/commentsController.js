var app = require('../../app');

exports.getComments = function(req, res) {
  app.knex('comments')
    .orderBy('id', 'asc')
    .then(function(rows) {
      console.log(rows.length + ' comments(s) returned');
      return res.json(rows);
    });
};

exports.getComment = function(req, res) {
  var comment_id = req.params.commentid;
  app.knex('comments').where('id', comment_id)
    .then(function(row) {
      console.log(row);
      return res.json(row);
    });
};

exports.createComment = function(req, res) {
  var comment = {}
  
  //get info from request body
  comment.member_id = req.body.member_id;
  comment.event_id = req.body.event_id;
  comment.message = req.body.message;
  comment.likes = 0;
  comment.created_on = req.body.created_on;
  
  app.knex
    .insert(comment)
    .returning('id')
    .into('comments')
    //Catch server error
    .catch(function(error){
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(row){
      var msg = [{
        'id': row[0],
        'message': 'added new comment'
      }];
      return res.status(201).json(msg);
    });
};

exports.updateComment = function(req, res){
  var comment_id = req.params.commentid;
  var comment = {};
  
  // Get the body, do not update created_by
  comment.message = req.body.message;
  comment.likes = req.body.likes;
  comment.updated_on = Date.now().toISOString();
  
  app.knex('comments')
    .update(event)
    .returning('id')
    .where('id', comment_id)
    //Catch server error
    .catch(function(error){
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(rows){
      if(rows.length === 0) {
        var failure_msg = [{
          'error': 'Could not find comment to update',
        }];
        return res.status(404).json(failure_msg);
      } else {
        var success_msg = [{
          'id': rows[0],
          'message': 'Successfully updated comment'
        }]
        return res.status(200).json(success_msg);
      }
    });
}

exports.deleteComment = function(req, res) {
  var comment_id = req.params.commentid;
  
  app.knex('comments')
    .where('id', comment_id)
    .del()
    .returning('id')
    //Catch server error
    .catch(function(error){
      console.error(error);
      return res.status(500).json(error);
    })
    .then(function(rows){
      if(rows.length === 0){
        var msg_failure = {
          'error': 'Could not find comment to delete'
        }
        return res.status(404).json(msg_failure);
      } else {
        var msg_success = {
          'id': rows[0],
          'message': 'Successfully deleted comment'
        }
        return res.status(200).json(msg_success);
      }        
    });
}