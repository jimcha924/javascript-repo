
#1. Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
let numArray = [2, 3, 4, 8, 9, 10, -4, -5, -16, -19, -24]

let posArr = numArray.filter(val =>{
    return val >0
});
console.log(posArr);

#2. Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

let numArr = [2, 3, 4, 8, 9, 10, 4, 5, 16, 19, 24]

let evenArr = numArr.filter(val =>{
    return val % 2 == 0
});
console.log(evenArr);

3. Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

let numArr = [1, 2, 3]

let squareTheNumbers = numArr.map(val =>{
    return val * val
});
console.log(squareTheNumbers);

4. Write a function which takes an array of city objects like such as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } 
];

let temps = cities.filter(val =>{
        if (val.temperature <= 70){
            return (val);
        }
    })
    console.log(temps);


5. Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
let cityNames = cities.map(value =>{
    return value.name
})
console.log(cityNames);

6. Print out 'Good Job, {{name}}!' for each person's name, one on a line.
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

people.forEach(name=>{
    console.log(`Good Job, ${name}!`)
})

7. Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.
var sortedPeople = people.sort(function (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
    });
console.log(sortedPeople);

8. Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
const shortest = people.sort((a,b) => a.length - b.length);
console.log(shortest);

9. Given an array of array of numbers (below). Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be     
    [ [1, 3, 4],
    [3, 6],
    [2, 4, 6, 8]]

// [[1, 3, 4],
// [2, 4, 6, 8],
// [3, 6]]


// const reducer = (accumulator, currentValue) => accumulator + currentValue;

var numbers = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);


10.
function call3Times(){
    console.log(`Hello, World`);
}
for (var i=0; i <3; i++){
    call3Times();
}


11.You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

> callNTimes(5, hello)
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world!

let times = 5

function callHello(){
    console.log('Hello, World!');
}
for (var i=0; i<5; i++){
    callHello();
}


12. Write a function sum that takes an array of numbers as argument and returns the sum of those numbers.
var arr = [2,3, 5, 7];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer))

13. Acronym
Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

> acronym(['very', 'important', 'person'])
'VIP' > acronym(['national', 'aeronautics', 'space', 'administration']) 'NASA'

let words = ['most', 'valuable', 'programmer']

let acronym = words.reduce((response,word)=> response+=word.slice(0,1),'')

console.log(acronym);