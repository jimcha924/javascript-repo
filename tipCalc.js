// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20%

// fair -> 15%

// // bad -> 10%

var bill = 100
var serviceQuality = 3
switch(serviceQuality){
    case 1:
        var tipAmount = .10;
        var tipBillAmount = (bill * tipAmount);
        break;
    case 2:
        var tipAmount = .15;
        var tipBillAmount = (bill * tipAmount);
        break;
    case 3:
        var tipAmount = .20;
        var tipBillAmount = (bill * tipAmount);
        break;
    default:
        console.log("Incorrect value entered. PLease try again");
}
console.log(`Your tip is $${tipBillAmount}.`)

var bill = 40
var service = 2
switch(service){
    case 1:
        var tipAmount = .10;
        var tipBillAmount = (bill * tipAmount);
        break;
    case 2:
        var tipAmount = .15;
        var tipBillAmount = (bill * tipAmount);
        break;
    case 3:
        var tipAmount = .20;
        var tipBillAmount = (bill * tipAmount);
        break;
    default:
        console.log("Incorrect value entered. PLease try again");
}
console.log(`Your tip amount is $${tipBillAmount}.`)