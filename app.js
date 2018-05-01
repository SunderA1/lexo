"use strict";
const app           = require('express')();
const bodyParser    = require('body-parser');
var config          = require('./configs.json');
var userRoutes      = require('./routes/userRoutes');
var feedbackRoutes  = require('./routes/feedbackRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRoutes);
app.use(feedbackRoutes);

app.listen(config.appPort,function(){
    console.log("app renning at port : "+config.appPort);
});
