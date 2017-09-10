/**
 * Created by PhpStorm.
 * User: vishant
 * Date: 9/9/17
 * Time: 1:52 PM
 */

/***
 * setting up
 * */
var express = require("express");                       // express for creating simple server
var app = express();                                    // create app using express
var bodyParser = require("body-parser");                // body parser to
var methodOverride = require("method-override");         // Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
var mongoose = require("mongoose");                     // mongoose to connect mongoDB
var database = require("./config/database.js");// loads mongoDB configuration.
var port = require("./config/port.js").port;// loads mongoDB configuration.

/***
 * configuration
 * */
app.use(bodyParser.urlencoded({extended: true}));        // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                             // parse application/json
app.use(bodyParser.json({type: "application/vnd.api+json"})); // parse application/vnd.api+json as json
app.use(methodOverride("X-HTTP-Method-Override"));      // override with the X-HTTP-Method-Override header in the request
mongoose.connect(database.mongo); // Connect to MongoDB instance.
/*var db = mongoose.connection;
db.on("error", console.error("connection error:"));*/
/***
 * routes
 * */
require("./app/routes.js")(app);

/***
 * start server
 * */
var server = app.listen(port.availablePort);

module.exports = server;

