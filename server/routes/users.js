let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/tasks', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;