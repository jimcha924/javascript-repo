

// // // browser
// // // html file
// // // external html file
// // // using node in terminal

// // var firstName = "Jim"
// // var lastName = "Chamberlin"

// // console.log(firstName + lastName);

// // firstName.length

// // console.log(firstName.length)

// // var name1 = false;

// // console.log(name1);

// // typeof(name1);

// // console.log(typeof(name1));

// // var isValid = true + 4;

// // var printThis = "hello" + 4;

// // console.log(printThis);

// // var name2 = "Jim"

// // console.log(name2.indexOf("i"));

// // var boolean = true;
// // var not = !boolean;

// // var and = boolean && false; // false

// // var or = boolean || false; // true

// // var equals = true == false; // false


// // var age = 21;
// // if (age>=21){
// //     console.log("You can drink!")
// // }
// // else if(age < 21){
// //     console.log("You're out of luck!")
// // }
// // else{
// //     console.log("Legal in Canada.")
// // }

// // var day = "Wednesday"

// // if(var = "Monday"){

// // }
// // else if(day = "Tuesday"){

// // }
// // else if(day = "Wednesday"){

// // }
// // else{

// // }

// // switch(day){

// //     case "Monday":
// //         break;
// //     case "Tuesday":
// //         console.log("Tuesday");
// //     case "Wednesday":
// //         break;
// //     case "Thursday":
// //         break;
// //     case "Friday":
// //         break;
// //     case "Saturday":
// //         break;
// //     case 1:
// //         break;

// //     default
// //         break;
// // }

// // var expr = 'Papayas'

// // switch(expr){
// //     case 'Oranges':
// //         console.log('Oranges are $0.59 a pound.');

// //     case 'Mangoes':
// //         break;

// //     case 'Papayas':
// //         console.log('Mangoes and papayas are $2.79 a pound.');
// //     // expected output: "Mangoes and papayas are $2.79 a pound."

// //     default:
// //         break;
// // }

// // LOOPS

// // var count = 1

// // while(count <= 10){
// //     console.log(count);
// //     count++;
// // }

// // for(var count = 1; count <= 10; count++){
// //     console.log(count)
// // }



// // ARRAYS

// // var arr = ["one", "two", "three"]

// // arr[1]

// // arr.push('four')
// // var newPoppedValue = arr.pop()
// // arr.pop()

// // // arr.shift() //removes first value of an array

// // console.log(arr);
// // console.log(newPoppedValue);

// // arr.unshift('front')
// // console.log(arr);

// // var name2 = "JimCha";

// // console.log(name2[2])

// // var words = "This is a great day."

// // for(var index=0; index < words.length; index++){

// //     var char = words[index];
// //     console.log(char);
// // }


// // for(var index=words.length - 1; index >= 0; index--){

// //     var char = words[index];
// //     console.log(char);
// // }



// // var myArr = words.split(' ')

// // console.log(myArr);

// // var newStr = myArr.join

// // Splice - permanently changes the array
// // var lottoNums = [23, 11, 43, 19, 37, 16];
// // var arrayOfSplicedValues = lottoNums.splice(2, 1);
// // console.log(arrayOfSplicedValues);
// // console.log(lottoNums);

// // Slice - not permanently mutated
// // var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// // console.log(animals.slice(2, 4));
// // console.log(animals);

// // var phonebook = {keyName: true}

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }

// // characterSheet["name"];

// // console.log(characterSheet["name"]);

// // characterSheet.name

// // console.log(characterSheet.name)

// // delete characterSheet.name 
// // // or
// // delete characterSheet["name"]

// for (keyName in characterSheet){
//     console.log(`${keyName} ${characterSheet[keyName]}`)
// }

// FUNCTIONS ARE REUSABLE CODE WHEN I NEED IT
function add(num1, num2){
    return num1 + num2
}

var result = add(3, 4)
console.log(result)