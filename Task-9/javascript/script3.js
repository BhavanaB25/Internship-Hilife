//Implementing array 

//Creating array using a single line

const array = ['hello','welcome',23,23.45,48956.94786];
console.log("The elements in the first array is "+array);
console.log(typeof array);


//Creating array using Index Number

const array1 = []

array1[0] = "Hi"
array1[1] = "Computer";
array1[2] = 23;
array1[3] = 679.86;
console.log("The elements in the Second array are " +array1);
console.log(typeof array1);

//Creating array using Array()

const array2 = new Array("Acer","Dell","Hp","Samsung");
console.log("The elements in the third array are " +array2);
console.log(typeof array2);

//Implementing array methods

//Push()
array.push(5);
console.log("Pushing method " +array);

//pop()
array.pop('welcome');
console.log("Poping method " +array);

//Implementing Object

//Creating an Object

var object = {
    Name:'Bhavana',
    DOB:"2004-08-25",
    Year:"III",
    Shift:"I",
}

//Finding type of the Created Object

console.log(typeof object);

//First Method for calling the property value

console.log(object.Name);

//Second Method for Calling the property value

console.log(object['DOB']);

//table() method

console.table(object);