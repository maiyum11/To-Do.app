var express = require('express');
var app = express.Router();

/* GET users listing. */
app.get('/tasks', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = app;