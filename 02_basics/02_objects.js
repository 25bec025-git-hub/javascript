// singleton - object formed by constructor 
//declared by literals => not singleton
//object.create
// object literals 

const mySym = Symbol("kay1"); // symbol declared 
const mySymb2 = Symbol("key1");

const Jsuser = {
    name: "Ashish Kumar",
    "District": "Supaul",
    mySym : "myKey1",
    [mySymb2]: "myky1",
    age: 18,
    location: "BIHAR",
    email: null,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(Jsuser.email);// same as console.log(Jsuser["email"]); as eamil is written in double quote because object keys are by default of string type 
// console.log(Jsuser["email"]);// preferred 
// console.log(Jsuser.District);
// console.log(Jsuser.mySym);//myKey1
// console.log(typeof Jsuser.mySym );// string
// console.log(Jsuser[mySymb2]);//myKy1
// console.log(typeof [mySymb2] );// object

Jsuser.email = "Kumar44939@gmail.com"
// Object.freeze(Jsuser);
// Jsuser.email = "sarkar9@gmail.com";
console.log(Jsuser);
Jsuser.greeting = function(){
    console.log(`Hello JS user ${Jsuser.name}`) // we can use this.name too instead of Jsuser.name because the obj of the function is same as of obj of name 
}
console.log(Jsuser.greeting) // [Function (anonymous)]
console.log(Jsuser.greeting())//Hello JS user Ashish Kumar