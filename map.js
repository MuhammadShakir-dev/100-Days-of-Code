// lets understand map in js 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((items) => items * 10);
// console.log(newNums);

// lets understand the concept of chaining here by using multiple methods

const newNums = myNums
    .map((items) => items * 10)
    .map((items) => items + 1)
    .filter((items) => items >= 40);

console.log(newNums);