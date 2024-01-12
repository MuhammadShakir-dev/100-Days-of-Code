// Numbers and Maths in JavaScript

const score = 400;
console.log(score);

// In the above way JS will automatically detacts that the types of the variable is Number.

// But if you want to specificaly defined your variable type then you should use it with new keyword.

const balance = new Number(100000); // In this way you will always get a number and you can perform some no methods on it.
console.log(balance); 


// methods we can use with numbers.

console.log(balance.toString().length);
console.log(typeof (balance));
console.log(balance.toFixed(2)); // you can use this mostly in ecommers websites

let remeaningBlanace = 450.678;
console.log(remeaningBlanace.toPrecision(4));

// To handle big values in 0s or to write value in more porfessional way.

let newBalance = 112000;
console.log(newBalance.toLocaleString('en-PK'));


// -------------- Maths --------------------


// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.round(123.69));
// console.log(Math.min(4,5,2,3,4,5));
// console.log(Math.max(3,4,2,4,5,6,7,9));

console.log(Math.floor(Math.random() * 20) + 1);

// Generate random numbers between 10 - 20
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



