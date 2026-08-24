// function addTwoNumbers( number1 , number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(43 , 53 );

// console.log("Result: ", result)

function addTwoNumbers( number1 , number2){
    
    // const result = number1 + number2;
    // return result;
    return number1 + number2;
}
const result = addTwoNumbers(43 , 53 );

// console.log("Result: ", result)

function loginUserMessage(userName) {
    if(userName === undefined){ // (!userName)
        return `Please enter a username`;
    }
    return `${userName} just logged in.`
    
}
// console.log(loginUserMessage("Ashish"))
// console.log(loginUserMessage( ))

//  ++++ part 2 ++++ //

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,700));

const user = {
    userName : "hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}
handleObject(user);// both give same output
handleObject({
    userName : "hitesh",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
