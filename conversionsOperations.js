let age = 21;
console.log(age);
console.log(typeof age); // number


let newAge = "23";
console.log(typeof newAge); // string


// to convert number string into number 

let finalAge = parseInt(newAge);
console.log(typeof finalAge); // number

// if we use it diff inputs such as.
/*
    "33" => 33 
    "33abc" => NaN
    true => 1
    false => 0
*/

// converting numbers into boolean

let isLogedIn = 1; // with 0 => false
let BooleanisLogedIn = Boolean(isLogedIn);
console.log(BooleanisLogedIn); // true 

// converting into string
let string = 33;
let stringConversion = String(string);
console.log(typeof stringConversion);
