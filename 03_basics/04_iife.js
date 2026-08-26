// Immediately Invoked Function Expression
// it saves the function from global scope pollution 
// (function chai (){ // named iife
//     console.log(`DB connected`);
// })();// semicolon ends the function

( name => { // unnamed iife
    console.log(`DB connected by ${name}`);
})('Ashish');


//  read javascript execution context