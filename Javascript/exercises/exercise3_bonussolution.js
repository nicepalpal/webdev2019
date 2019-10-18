var operation = prompt("What operation are you conducting? Type +, -, * or /.");
var firstNumber = prompt("Input the first number.");
var secondNumber = prompt("Input the second number.");
var output = ""
if (operation === "+"){
  var output = Number(firstNumber) + Number(secondNumber);
} else if (operation === "-"){
  var output = Number(firstNumber) - Number(secondNumber);}
alert(output);
