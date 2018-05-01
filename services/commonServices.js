"use strict";
var crypto = require('crypto');
var usersModel = require('../models/usersModel');
module.exports.varifyUser = function (req, res) {
    
    usersModel.findOne({ emailId: req.body.emailId }, { emailId: true, password: true, salt: true }, function (err, result) {
        if (err) {
            res.status(500).json({ status: "error", message: "unable to read from users modal." });
        }
        if (result) {
            let password = crypto.pbkdf2Sync(req.body.password, result.salt, 1000, 32, 'sha512').toString('hex');
            if (password == result.password && req.body.emailId == result.emailId) {
                res.status(200).json({ status: "success", message: "loged in successfully." });
            } else {
                res.status(401).json({ status: "error", message: "Invalid username or password." });
            }
        } else {
            res.status(401).json({ status: "error", message: "Invalid username or password." });
        }
    });
}