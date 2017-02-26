var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

var index = require('./routes/index');
var add = require('./routes/add');
var subtract = require('./routes/subtract');
var divide = require('./routes/divide');
var multiply = require('./routes/multiply');


app.use(bodyParser.urlencoded({extended: true}));

app.use('/add', add);
app.use('/subtract', subtract);
app.use('/multiply', multiply);
app.use('/divide', divide);

app.use('/', index);

app.listen(port);
