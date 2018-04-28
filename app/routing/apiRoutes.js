
var Users = require('../data/friends.js');
var bodyParser = require("body-parser");


module.exports = function (app) {

  app.get('/api/Users', function (req, res) {
    res.json(Users);
    console.log(Users)
  });

app.post("/api/new", function (req, res) {
  var newUser = req.body;
  console.log(newUser)
  Users.push(newUser);
  
  res.json(Users);
});


};