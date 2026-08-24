// global object under browser is window object so we are able to use events and read all these things
const user = {
    userName: "Ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website `)
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()
//  console.log(this)

// function chai(){
//     let username = "Shanta"
//     console.log(this.username);
// }

// const chai = function(){
//     let username = "Shanta"
//     console.log(this.username);
// }

// const chai = () =>{
//     let username = "Shanta"
//     console.log(this);
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// implicit return 

// const addTwo = (num1, num2) =>   num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => {username: "Ashish"};// undefined
const addTwo = (num1, num2) =>({username});

console.log(addTwo(43,45));

// const myArray = [2,5,7,8]
//myArray.forEach
