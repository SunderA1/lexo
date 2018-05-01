var Joi = require('joi');
 
module.exports = {
  body: {
    name : Joi.string().regex(/[a-zA-Z ]{3,30}/).required(),
    emailId: Joi.string().email().required(),
    subject : Joi.string().required(),
    feedback: Joi.string().required()
  }
};