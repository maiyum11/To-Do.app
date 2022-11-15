let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

                        ////////*EDIT THIS*////////
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about me page. */
router.get('/home', indexController.displayHomePage);

module.exports = router;