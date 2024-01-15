// Let's learn about arrays in JS
// There are three way in which we can declear arrays in JS mentioned below

// Behind the scnz there is nothing like array like if you check type of Array you will get object

let ary1 = [0, 1, 2, 3, 4, 5];
let ary2 = ["Muhammad Shakir", 23, "Male"];
let ary3 = new Array(1,2,3,4,5)
console.log(ary1);
console.log(ary2);
console.log(ary3);

console.log(typeof ary1); // object

// Let's works with some array methods


ary1.push(6); // add 6 at the end of the array.
// console.log(ary1);

ary2.pop(); // del the last element from your array.
// console.log(ary2);

ary3.shift(); // del the first element from your array.
// console.log(ary3);

ary3.unshift(1); // adds a new element in your array.
// console.log(ary3);

// console.log(ary3.includes(5)); // true

// slice and splice
// slice and splice are different from each other main diff is that slice doesn't effect/manipulate the original array
// Splice manipulate the original array


const newArray = [1, 2, 3, 4, 5];

// console.log("A", newArray);
// console.log(newArray.slice(1, 3));

// console.log("B", newArray);
// console.log(newArray.splice(1, 3));
// console.log("Original Array", newArray);


// now i have to merged both of the above arrays so for this i have diff methods in js

let marvel_Heros = ["Thor","Ironman","Spiderman"];
let dc_Heros = ["Superman","Batman","Flash"];

let all_Heros = [...marvel_Heros, ...dc_Heros];
console.log(all_Heros);


// Let's take another example
// Suppose you have an array of array of array and your task is to make a single array in which all values of sub
// array are present.

const new_Array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]];
const final_Array = new_Array.flat(Infinity) // if you don't know the depth of your array just write infinity.

console.log(final_Array);
console.log(new_Array);


// Convert strings into arrays.

let value = "Muhammad Shakir";
let array_Value = Array.from(value);
console.log(array_Value);


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
