"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lexoApp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connection to Database Estiblished!");
});

module.exports = mongoose;