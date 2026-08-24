// let myDate = new Date(); // why new is used ??
// console.log(myDate);
// console.log(myDate.toDateString());// search all object or method by myDate.
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let mycreatedDate = new Date(2023, 0, 4, 5, 3);//month starts from zero
// let mycreatedDate2 = new Date(2023, 0, 4, 5, 3);
// console.log(mycreatedDate);
// console.log(mycreatedDate2);

// let  mycDate2 = new Date("2023-01-14")//in string month starts from 01;
 let  mycDate = new Date("01-14-2023")//in string month starts from 01;
// console.log(mycDate2.toLocaleString());


let myTimeStamp = Date.now();// gives time from 1970 to just now in milli second 
// console.log(myTimeStamp);
// console.log(mycDate.getTime());

// console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() );// return day of the week
newDate.toLocaleString('default',{
    weekday: "long",

}) // presss ctrl + space to get property or methods 