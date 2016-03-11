// REQUIRE DEPENDENCIES
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var hbs = require('hbs');
// var controllers = require('./controllers');

// APPLICATION CONFIGURATION
mongoose.connect('mongodb://localhost/homeward');
process.on('exit', function () {
  mongoose.diconnect();
});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;

// REGISTRATION
// ROUTES / CONTROLLERS
// LISTEN
