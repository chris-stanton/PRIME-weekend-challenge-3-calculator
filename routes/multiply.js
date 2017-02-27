var express = require("express");
var router = express.Router();
//object  being sent back to client.js
var number = {
  result: 0
}

function multiply(x, y) {
  return x * y;
}

router.post("/", function(req, res) {
  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);
  //takes value given from function and places in the object
  number.result = multiply(x, y);
  res.sendStatus(200);
});

router.get("/", function(req, res) {
  res.send(number);
});

module.exports = router;
