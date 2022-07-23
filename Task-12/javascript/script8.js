
//Initializing the variables
var firstNumber;
var secondNumber;

//Types of Functions

//1) Normal Function

function multiplyValues(firstNumber,secondNumber){
    console.log("Normal Function");
    console.log(firstNumber*secondNumber);
}
multiplyValues(10,10);

function divisionValues(firstNumber,secondNumber){
    console.log("Normal Function");
    console.log(firstNumber/secondNumber);
}
divisionValues(10,10);


//2) Anonymous Function

var multiplicationValues = function(firstNumber,secondNumber){
    console.log("Anonymous Function");
    console.log(firstNumber*secondNumber);
}
multiplicationValues(10,10);

var divValues = function(firstNumber,secondNumber){
    console.log("Anonymous Function");
    console.log(firstNumber/secondNumber);
}
divValues(10,10);

//3) Arrow Function

const multVal = (firstNumber,secondNumber) => {
    console.log("Arrow Function");
    console.log(firstNumber*secondNumber);
}
multVal(10,10);

//4) IIFE Function

(function (firstNumber,secondNumber){
    console.log("IIFE Function");
    console.log(firstNumber*secondNumber);
})(10,10);

