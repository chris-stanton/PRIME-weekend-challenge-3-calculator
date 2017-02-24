var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));







app.listen(port);
