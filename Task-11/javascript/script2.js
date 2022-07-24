//initialing and declaring variables

var str = "Hello welcome..! Glad to see you";

//Finding Length of the string
var length = str.length;
console.log("Length of the string is " +length);

//Implementing Slice Method
var slice = str.slice(6,13);
console.log("Slice of the String is "+slice);

//Implementig Substring method
var subString = str.substring(17,32);
console.log("Substring of the given string is "+subString);

//Implementing Replacing method
var replace  = str.replace("you","All");
console.log("After replacing the string is " +replace);

//Implemnting UpperCase method
var upperCase = str.toUpperCase();
console.log("The Uppercase String is "+upperCase);

//Implementing LowerCase method
var lowerCase = str.toLowerCase();
console.log("The Lowercase string is "+lowerCase);

//Implementing Concat method
var firstString = "Hello ";
var secondString = "Bhavana..!";
var thirdString = firstString.concat(secondString);
console.log("The String after concat method is "+thirdString);

//Impelementing Trim method
var firstString = "    Hello Bhavana...!     ";
var trim = firstString.trim();
console.log("After using trim method is "+trim);

//Number methods

//Converting Number into String
var number = 12234;
var toString = number.toString();
console.log(typeof toString);

//Implementing Exponential method
var number = 2;
var exp = number.toExponential(2);
console.log("Exponential of the give number is "+exp);

//Implementing Fixed method
var number = 77.6459;
var fixed = number.toFixed(2);
console.log("The fixed value of the given number is "+fixed);

//Implementing Precision method
var number = 75.348;
var precision = number.toPrecision(3);
console.log("After using precision method is "+precision);

//Implementing Number method]
var date = new Date("2004-08-25");
var number1 = Number(date);
console.log("After using number method "+number1);

//Implementing infinite
var number = -1/0;
console.log("The value of the given number is "+number)


