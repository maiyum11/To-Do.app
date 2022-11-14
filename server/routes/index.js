var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/home', function(req, res, next) {
  res.render(('index'), { title: 'Homepage', section: '2nd year Networking and IT security student' });
});
/* GET about me page. */
app.get('/aboutme.html', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET projects page. */
app.get('/projects.html', function(req, res, next) {
  res.render('index', { title: 'Projects Page' });
});
/* GET contact me page. */
app.get('/contactme.html', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});
module.exports = app;