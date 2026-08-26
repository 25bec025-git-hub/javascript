// if
// const isUserLoggedIn = true
// const temperatature = 41;


// if ( temperatature === 41){
//     console.log("temperature is greater than 40 ");}
//     else {
//         console.log("temperature is less than 40 ")

//     }
    //  < , > , <= , >=, ==, !=, ===, !==

    const score = 200
    if(score >100 ){
        const power = "fly";
        console.log(`user power: ${power}`);
    }
//  if else...... if 

// nested if 
const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;

if ( userLoggedIn && debitCard && loggedInFromEmail){
    //  code 
}

if ( userLoggedIn || debitCard || loggedInFromEmail){
    //  code 
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
 const month = 3
switch (month) {
    case 1:
        console.log("jan")
        break;
    
    default:
        break;
}


//  see truthy and falsy values refer your hand written note 

// falsy value => false, 0, -0, 0n, "", null, undefined , NaN 
// rest all values are true values 
//  truthy values 
//  "0", " ", [], {}, function(){}

// if (arrayName.length === 0){
//  console.log ("array is empty");}

const emptyObj = {}

if((Object.keys(emptyObj)).length === 0){
    console.log ("object is empty");
}

// Nullish Coalescing Operator(??): null, undefined
let val1 = null ?? 10 ?? 20 ?? 30
console.log(val1);

// ternary operator 
// condition ? true : false