//use backticks instead of + operator
let name = "ashish";
let repoCount = 5;
++repoCount;
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
// console.log(name + repoCount + "value");

const gameName = new String('Pakdam_pakda'); // run this line in console you will see prototype and ..

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('_'));

const newString = gameName.substring(2,5);
console.log(newString);

const anotherString = gameName.slice(-3,5); // slice cane take negative value also while substring can't
console.log(anotherString);

const str1 = "   supaul   "
console.log(str1);
console.log(str1.trim()); 

const url = " https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));

