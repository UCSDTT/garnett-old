var app = require('../../app');

exports.getAttending = function(req, res) {
  app.knex('attending')
    .orderBy('id', 'asc')
    .then(function(rows) {
      console.log(rows.length + ' attending rows(s) returned');
      return res.json(rows);
    });
};

exports.getOneAttending = function(req, res) {
  var attending_id = req.params.attendingid;
  app.knex('attending').where('id', attending_id)
    .then(function(row) {
      console.log(row);
      return res.json(row);
    });
};