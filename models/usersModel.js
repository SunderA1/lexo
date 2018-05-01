"use strict";
var mongoose = require('./dbConnection');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    "firstName" : String,
    "lastname"  : String,
    "contactNo" : String,
    "emailId"   : String,
    "password"  : String,
    "salt"      : String
});
var users = mongoose.model('userdetails', userSchema);

module.exports = users;