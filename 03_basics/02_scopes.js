// read about closure 

if (true){
    let a = 10 
    const b =20
    var c = 30

}
// for (let i = 0; index < array.length; i++) {
    // const element = array[i];    }
// console.log(a); // not accessible out of scope 
// console.log(b);// not accessible out of scope 


function one(){
    const username = "ahish"

    function two (){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    two();

}

one();

if (true){
    const username = "Ashsh"
    if (username === "Ashsh"){
        const website = " Instagram";
        console.log(username + website );
    }
}
//  ++++++++++ Intresting +++++++  
console.log(addone(5));
function addone(num){
    return num + 1;
}

console.log(addTwo(5));

const addTwo = function(num){
    return num + 2;
}
