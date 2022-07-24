
var firstNumber = 3;
var secondNumber = 10;

//Arithmetic Operator

//Addition
var sum = firstNumber + secondNumber ;
console.log("Addition is "+sum);

//Subraction
var sub =  firstNumber - secondNumber ;
console.log("Subraction is "+sub);

//Multiplication
var mul =  firstNumber * secondNumber ;
console.log("Multiplication is "+mul);

//Division
var div =  firstNumber / secondNumber ;
console.log("Division is "+div);

//Exponential using **
var exp = firstNumber ** secondNumber;
console.log("Exponential using ** is "+exp);

//Exponential using math.pow
var POW = Math.pow( firstNumber , secondNumber);
console.log("Exponential using mathpow is "+POW);

//Modulo
var mod = firstNumber % secondNumber;
console.log("Modulo is "+mod);

// logical Operator

//And => &&

var firstNumber = 10;
var secondNumber = 20;
var thirdNumber = 30;

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log("Biggest is "+firstNumber);
}
else if(secondNumber > thirdNumber){
    console.log("Biggest is "+secondNumber);
}
else{
    console.log("Biggest is "+thirdNumber);
}

//OR => ||

var age = 4;

if(age <= 10 || age >= 60){
    console.log("Pay Free");
}

// NOT => !

var age = 10;

if(age !== 18){
    console.log("Age is 18")
}

//Bitwise Operator

//Bitwise And

var a = 3;
var b = 5;

console.log(a & b);

//Bitwise Or

var a;
var b;

console.log(a | b);

//Bitwise XOR

var a;
var b;

console.log(a ^ b);

//Conditional Operator

var a;
var b;

var biggestNumber = (a > b) ? a : b ;
console.log("Biggest Number is "+biggestNumber);