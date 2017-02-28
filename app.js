var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 5000;
//var path = ("path"); send file that is not in the static folder

var index = require("./routes/index");
var add = require("./routes/add");
var subtract = require("./routes/subtract");
var divide = require("./routes/divide");
var multiply = require("./routes/multiply");

//app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));//creates req.body

app.use("/add", add);
app.use("/subtract", subtract);
app.use("/multiply", multiply);
app.use("/divide", divide);

app.use("/", index);

app.listen(port, function(){
  console.log(port); //shows in terminal what port is listening
});
//res.send( path.resolve("file path goes here")); send file that is not in the static folder "HTML file" usually
