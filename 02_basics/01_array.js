// array , resizable , 0 based operation 
// shallow copy, deep copy read karo
// experiment in inspect 
const myArr =[0, 1, 3, 5, 7, 'Ashish',true];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[3]);

// array methods 

// myArr.push(10);
// myArr.push(67);
// console.log(myArr);
// let lastElement = myArr.pop();
// console.log(lastElement);

// myArr.unshift(9);  // use least 

// console.log(myArr);

// console.log(myArr.includes('Ashish'));
// console.log(myArr.indexOf('Ashish'));

// const newArr = myArr.join();//bind elements and format in string 
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log(`A. ${myArr}`);
const myn1 = myArr.slice(2,5);//
console.log(myn1);
console.log(`B. ${myArr}`);

const myn2 = myArr.splice(2,5);
console.log(myn2);
console.log(`C. ${myArr}`);
console.log( myArr);

// +++++ part 2 +++++++ //


// const heros1 = ["a", "b", "c", "d"]
// const heros2 = ["e", "f", "g"]

// heros1.push(heros2);
// console.log(heros1);
// console.log(heros1[4][1]);

// const allheros1 = heros1.concat(heros2);
// console.log(allheros1); // ['a', 'b', 'c', 'd', 'e', 'f', 'g' ]

// const heros3 = ["h", "i", "j", "k"];
// const allheros2 =[...heros1, ...heros2, ...heros3]; // spreading
// console.log(allheros2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ]

// const arra = [1,2,3,[4,5,6,[343445,44,[455]]] , [23,34,45]];
// const usable_arra = arra.flat(Infinity);
// console.log(usable_arra);//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

console.log(Array.isArray('Ashish'));
console.log(Array.from("Ashish"));
console.log(Array.from({name: "Ashish"})); //intersting , gives empty array because it doesn't know that it has to form the kay or values 
let score1 = 100, score2 = 200, score3 = 400;
console.log(Array.of(score1, score2, score3));//[ 100, 200, 400 ]
