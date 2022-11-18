let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

/* GET home page. */
router.get('/home', indexController.displayHomePage);

module.exports = router;