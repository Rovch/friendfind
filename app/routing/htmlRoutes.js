var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();

// Sets up for express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function survey() {
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });
}
function home() {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
}


// exports the variables and functions above so that other modules can use them
module.exports.home = home;
module.exports.survey = survey;
