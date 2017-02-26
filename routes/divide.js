var express = require('express');
var router = express.Router();

var number = {
  result: 0
}

function divide(x, y) {
  return x/y;
}

router.post('/', function(req, res) {
  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);
  number.result = divide(x, y);
  res.sendStatus(200);
});

router.get('/', function(req, res) {
  res.send(number);
});

module.exports = router;
