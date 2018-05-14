var mongoose   = require('mongoose');

var dbConfig = require('./db');
var path    = require("path");

mongoose.connect(dbConfig.url);

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../src')));

var port = process.env.PORT || 8080;        // set our port

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// ROUTES FOR OUR API
// =============================================================================
var Post     = require('./models/post');
const router = require('express').Router();
var index_routes     = require('./routes/index')(router);
var post_routes     = require('./routes/posts')(router);


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', index_routes);
app.use('/api', post_routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
