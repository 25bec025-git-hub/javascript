//  for of 
// const arr = [1, 2, 3, 4, 5, 6]

// for (const val of arr) {

//  console.log(val);
    
// }
// const greetings = "hello mere pyare doston"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }




//  Maps => like object but it is the collection of unique, ordered key value pairs  , 
// find that ,ap is iterable or not

const map = new Map()

map.set('IN', "India");
map.set('BH', "Bihar");
map.set('SUP', "Supaul");
map.set('IN', "India");

// console.log(map);

for (const [key, value] of map) { //for (const [k, v] of map) {console.log(k, ':-', v); }
    console.log(key, ':-', value);
    
    
}

const myObject = {
    'IN': "India",
    'BH': "Bihar",
    'SUP': "Supaul"


}

for (const [k, v] of myObject) {console.log(k, ':-', v); }