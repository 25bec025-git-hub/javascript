const score = 400;
const balance = new Number(100); //explicitly defined the data type
// console.log(score);
// console.log(balance);// run in inspect and see the result and many more things in output

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//learn string properties

const otherNumber =123.56778;

// console.log(otherNumber.toPrecision(2));// learn property

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));
// Number. in inspect to see the various prperties of Number or console.log(Number) in inspect

// +++++ MATH +++++;
// console.log(Math) in inspect to see values, properties and functions 
// console.log(Math.round(3456.567));
// console.log(Math.abs(-45));
// Math. (ceil, floor, min, max)
// console.log(Math.max(23,23.56,23.99,23,22,));

console.log(Math.random()); // gives valves from 0 to 1
console.log((Math.random()*10)+1);// to amplify
console.log(Math.floor((Math.random()*10)+1));


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min)
