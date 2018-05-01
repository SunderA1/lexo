"use strict";
var users       = require('../models/users');
var services    = require('../services/commonServices');
module.exports.helloMessage = function (req,res){
    res.send("Hello from lexo app !");
}

module.exports.signup = function (req,res){
    users.saveUserDetails(req,res);
}

module.exports.login = function (req,res){
    services.varifyUser(req,res);
}
