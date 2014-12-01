var app = require('../../app');

exports.getMembers = function(req, res) {
  app.knex('members')
    .orderBy('id', 'asc')
    .then(function(rows) {
      console.log(rows.length + ' member(s) returned');
      return res.json(rows);
    });
};