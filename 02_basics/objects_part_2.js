// const tinderUser = new Object() // singleton object 
//  Read documentation
//  use console to know about properties 
const tinderUser = {}// non sinleton object 
// there is no difference except singleton and non singleton 
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "abcuser@gmail.com",
    fullname: {
        userFullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userFullname)
const obj1 = {1 :"q" , 2 :"f"}
const obj2 = { 3: "g", 4 :"65"}
const obj4 = { 5: "h", p :"5"}

// const obj3 = { obj1 , obj2};

// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

const users = [
    {
        id: 1,
        name: "abc"
    },
    {
        id: 2,
        name: "def"
    },
    {
        id: 3,
        name:"ghi"
    }
]
users[1].name
console.log(tinderUser)
console.log(Object.keys(tinderUser))//returns array of keys of passing object 
console.log(Object.values(tinderUser))//returns array of values of passing object 
console.log(Object.entries(tinderUser))//returns arrays of array of key and value of passing object 
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // to ask a property exist or not

//// Part 2 ///
// const course = {
//     courseName : "Javascript",
//     price: "999",
//     courseInstructor : "Hitesh"

// }

//course.courseInstructor
//  const {courseInstructor} = course 
//  console.log(courseInstructor) // hitesh
 const {courseInstructor: instructor} = course

console.log(instructor);
//  ++++ API +++++  // Read about json 
{
    "name": "Hitesh",
    "courseName": "Javascript",
    "price": "free"
}
