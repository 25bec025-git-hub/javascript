const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swipt: 'swift by apple'

}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    
    console.log(`${key} is shortcut for ${myObject[key]}`);
}


const programming = ['js', 'ruby', 'python', 'java']

for (const key in programming){
    console.log(key);
    console.log(programming[key]);
    
    
    
    
}