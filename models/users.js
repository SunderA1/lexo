"use strict";
var crypto      = require('crypto');
var users       = require('./usersModel');

module.exports.saveUserDetails = function (req, res) {
    let salt = crypto.randomBytes(16).toString('hex');
    let password = crypto.pbkdf2Sync(req.body.password, salt, 1000, 32, 'sha512').toString('hex');

    var userDetails = new users({
        "firstName": req.body.firstName,
        "lastname": req.body.lastName,
        "contactNo": req.body.contectNo,
        "emailId": req.body.emailId,
        "password": password,
        "salt"  : salt
    });
    userDetails.save(function (error) {
        if (error) {
            console.error(error);
        }
        console.log("Your User has been saved!");
        res.status(200).json({status : "success", message : "user has been successfully saved."});
    });
}