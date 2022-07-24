//Finding the amount after 5 years

//Interest Formula: rateofInterest * 1000

var actualAmount = 1000;
var interest = (5/100);

//Using for loop to find the actual Amount

//Formula: amount = amount + interest
for( var year = 1 ; year <= 5; year ++ ){
    actualAmount += interest;
    console.log ( `The Amount after ${year} Years is ${actualAmount}` );
}