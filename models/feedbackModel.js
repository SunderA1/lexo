"use strict";
var mongoose = require('./dbConnection');

var schema = mongoose.Schema;

var feedbackSchema = new schema({
    "name": String,
    "email": String,
    "subject" : String,
    "message": String
});

var feedbackModel = mongoose.model('feedBack', feedbackSchema);

module.exports = feedbackModel;