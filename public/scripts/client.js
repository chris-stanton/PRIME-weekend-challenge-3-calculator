$(document).ready(function(){

//setting empty value object
var calcInputs = {
  x:"",
  y:"",
  type:""
};

//clear button
$('#clear').on("click", 'button', function(){
  $('#numbersOnDom').empty();
    calcInputs = {
    x:"",
    y:"",
    type:""
  };
});

//operator buttons
$('#operator').on('click', 'button', function (){
  var operator = $(this).attr("id");
  calcInputs.type = operator;
});

//equal button
$('#equals').on('click', function (){
$('#numbersOnDom').empty();
//set input value to a var
calcInputs.x = $("#numberOne").val();
calcInputs.y = $("#numberTwo").val();
console.log(calcInputs);
//selects function based off operator type
var currentOperator = calcInputs.type;
//I was originally going to you a IF, ELSE IF, ELSE statement to call the ajax functions but saw
// SWITCH CASE and seemed really cool.  So I decided to try it.  I think that using SWITCH CASE
//used less key strokes
switch (currentOperator) {
  case 'add':
    getAdd();
    break;
  case 'subtract':
    getSubtract();
    break;
  case 'multiply':
    getMultiply();
    break;
  case 'divide':
    getDivide();
    break;
  default:
  }
});

//addition POST & GET
function getAdd(){
  $.ajax({
    type: 'POST',
    url: '/add',
    data: calcInputs,
    success: function(data) {
    additionToDom();
    }
  });
}
function additionToDom(){
  $.ajax({
    type:'GET',
    url: '/add',
    success: function(data) {
      $("#numbersonDom").empty();
      $("#numbersOnDom").text("<p>"+ data.result +"<p>");
    }
  });
}

//subtraction POST & GET
function getSubtract(){
  $.ajax({
    type: 'POST',
    url: '/subtract',
    data: calcInputs,
    success: function(data) {
    subtractToDom();
    }
  });
}
function subtractToDom(){
  $.ajax({
    type:'GET',
    url: '/subtract',
    success: function(data) {
      $("#numbersonDom").empty();
      $("#numbersOnDom").append("<p>"+ data.result +"<p>");
    }
  });
}

//multiplcation POST & GET
function getMultiply(){
  $.ajax({
    type: 'POST',
    url: '/multiply',
    data: calcInputs,
    success: function(data) {
    multiplyToDom();
    }
  });
}
function multiplyToDom(){
  $.ajax({
    type:'GET',
    url: '/multiply',
    success: function(data) {
      $("#numbersonDom").empty();
      $("#numbersOnDom").append("<p>"+ data.result +"<p>");
    }
  });
}

//division POST & GET
function getDivide(){
  $.ajax({
    type: 'POST',
    url: '/divide',
    data: calcInputs,
    success: function(data) {
    divideToDom();
    }
  });
}
function divideToDom(){
  $.ajax({
    type:'GET',
    url: '/divide',
    success: function(data) {
      $("#numbersonDom").empty();
      $("#numbersOnDom").append("<p>"+ data.result +"<p>");
    }
  });
}

});