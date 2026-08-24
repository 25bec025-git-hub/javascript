// typescript doesn't allow to compare two different data types 
// console.log("02".1);
console.log(null>0);  //false
console.log(null == 0); //false
console.log(null>=0); //true  
// eqality check and comparison works differently .
// comparison converts null to number , treating it as 0,that's why null >= 0 is true and null > 0 is false  
// === strict check 