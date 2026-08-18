const accountId = 12346;
let accountEmail = "Ashish67890@gail.com";
console.log(accountEmail);
console.log(accountId);
let accountCity = "raghopur";
let accountPassword = 7890;
console.table([accountId, accountCity,accountPassword,accountEmail])
accountEmail = "adsfsf";
accountCity = "Hamirpur";
accountPassword = "23456"
let accountState ;
/*
prefer not to use var because of issue in block scope and functional scope 
*/

console.table([accountId, accountCity,accountPassword,accountEmail])
