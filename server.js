var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var routes = require("./app/routing/htmlRoutes.js");

//express info
//=============================================================
var app = express();
var PORT = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// var test = Document.getElementById("survey");
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});