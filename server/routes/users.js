var express = require('express');
var app = express.Router();

/* GET users listing. */
app.get('/home', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = app;