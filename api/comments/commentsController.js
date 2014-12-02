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
  var commentid = req.params.commentid;
  app.knex('comments').where('id', commentid)
    .then(function(row) {
      console.log(row);
      return res.json(row);
    });
};