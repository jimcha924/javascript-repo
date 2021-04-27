// Write a function tipAmount that is given the bill amount and the level of serviceQuality (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20%

// fair -> 15%

// // bad -> 10%


var bill = 100
var serviceQuality = 3
var partySize = 5
switch(serviceQuality){
    case 1:
        var tipAmount = .10;
        var totalBillAmount = (bill * tipAmount) + bill;
        var splitAmount = (totalBillAmount / partySize);
        break;
    case 2:
        var tipAmount = .15;
        var totalBillAmount = (bill * tipAmount) + bill;
        var splitAmount = (totalBillAmount / partySize);
        break;
    case 3:
        var tipAmount = .20;
        var totalBillAmount = (bill * tipAmount) + bill;
        var splitAmount = (totalBillAmount / partySize);
        break;
    default:
        console.log("Incorrect value entered. PLease try again");
}
console.log(`The amount of your total bill is $${splitAmount}.`)


var bill = 40
var serviceQuality = 2
var partySize = 2
switch(serviceQuality){
    case 1:
        var tipAmount = .10;
        var totalBillAmount = (bill * tipAmount) + bill;
        var splitAmount = (totalBillAmount / partySize);
        break;
    case 2:
        var tipAmount = .15;
        var totalBillAmount = (bill * tipAmount) + bill;
        var splitAmount = (totalBillAmount / partySize);
        break;
    case 3:
        var tipAmount = .20;
        var totalBillAmount = (bill * tipAmount) + bill;
        var splitAmount = (totalBillAmount / partySize);
        break;
    default:
        console.log("Incorrect value entered. PLease try again");
}
console.log(`The amount of your total bill is $${splitAmount}.`)