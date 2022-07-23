
//Declaring variable to get the Number from the user
var primeNumber = prompt("Enter Any Number");

//Loop to find the to get the i
for(var i=2;i<=primeNumber/2;i++){
    if(primeNumber % i == 0){
        break;
    }
}

//Finding prime Number or not

if(i > primeNumber/2){
        alert("It is a prime Number");
}
else{
        alert("It is not a prime Number");
}