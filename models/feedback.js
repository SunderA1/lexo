"use strict";
var feedbackModel = require('./feedbackModel');

module.exports.savefeedback = function (req, res) {
    var feedback = new feedbackModel({
        "name": req.body.name,
        "email": req.body.emailId,
        "subject": req.body.subject,
        "message": req.body.feedback
    });
    feedback.save(function (error) {
        if (error) {
            console.error(error);
        }
        console.log("Your User has been saved!");
        res.status(200).json({status : "success", message : "feedback has been successfully saved."});
    });
}