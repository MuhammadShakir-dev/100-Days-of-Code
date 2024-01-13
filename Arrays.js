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
console.log(ary1);

ary2.pop(); // del the last element from your array.
console.log(ary2);

ary3.shift(); // del the first element from your array.
console.log(ary3);

ary3.unshift(1); // adds a new element in your array.
console.log(ary3);

console.log(ary3.includes(5)); // true

// slice and splice
// slice and splice are different from each other main diff is that slice doesn't effect/manipulate the original array
// Splice manipulate the original array


const newArray = [1, 2, 3, 4, 5];

console.log("A", newArray);
console.log(newArray.slice(1, 3));

console.log("B", newArray);
console.log(newArray.splice(1, 3));
console.log("Original Array",newArray);
