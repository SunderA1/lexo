"use strict";
var express             = require('express');
var router              = express.Router();
var validate            =  require('express-validation');
var feedbackValidator          = require('../test/validation/feedbackValidator');
var feedbackController  = require('../controllers/feedbackController');

router.post('/contactus', validate(feedbackValidator), feedbackController.feedback);

module.exports = router;