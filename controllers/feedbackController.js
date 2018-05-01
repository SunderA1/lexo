"use strict";
var feedback   = require('../models/feedback');

module.exports.feedback = function (req,res){
    feedback.savefeedback(req,res);
}