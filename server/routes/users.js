var express = require('express');
var app = express.Router();

/* GET users listing. */
app.get('/index', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = app;