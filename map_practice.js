// Lets practice Map method in JS

/*
Task: You need to create an array of objects containing the names of students along with a message indicating whether they passed or failed.
The passing score is 80 or above.
*/

const students = [
    { id: 1, name: 'John', score: 85 },
    { id: 2, name: 'Alice', score: 92 },
    { id: 3, name: 'Bob', score: 78 },
    { id: 4, name: 'Eve', score: 88 },
    { id: 5, name: 'Michael', score: 95 }
];


// Solution:1
// This is the solution of this problem using simple if else condition but it didn't give u array of object it will give you array 

let passStudents = students.map((items) => { 
    if (items.score > 80) {
        return `${items.name} Congratulations you have pass!`;
    } else if (items.score < 80) { 
        return  `${items.name} Sorry you are fail!`
    }
})
// console.log(passStudents);


// Solution:2
// Lets solve this and return the value in the form of array of objects

let passOrFailed = students.map((student) => { 
    return {
        name: student.name,
        result : student.score > 80 ? 'Passed' : 'Failed'
    }
})
// console.log(passOrFailed);


/*
Task: You need to create an array of strings containing the names of the products along with their prices formatted as a currency string.
*/

const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 699 },
    { id: 3, name: 'Tablet', price: 399 },
    { id: 4, name: 'Headphones', price: 149 },
    { id: 5, name: 'Smartwatch', price: 249 }
  ];


// Solution

let productsPrices = products.map((prodcut) => { 
    return `${prodcut.name} Pice is $:${prodcut.price}`
})

console.log(productsPrices);
