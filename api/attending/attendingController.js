var app = require('../../app');

exports.getAttendings = function(req, res) {
  app.knex('attending')
    .orderBy('id', 'asc')
    .then(function(rows) {
      console.log(rows.length + ' attending rows(s) returned');
      return res.json(rows);
    });
};

exports.getAttending = function(req, res) {
  var attendingid = req.params.attendingid;
  app.knex('attending').where('id', attendingid)
    .then(function(row) {
      console.log(row);
      return res.json(row);
    });
};