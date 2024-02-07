 // Lets understand about high order array loops in JS

// for of loop :- works with arrays, strings, maps 

// Write a JavaScript program to print all the even numbers between 1 and 20 using a for loop.

const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (const num of ary) {
    if (num % 2 === 0) { 
       // console.log(num);
    }
}

const str = "JavaScript is love";
for (const value of str) {
    //console.log(value);
}

// lets use this with map
// Map is a new datatype in JS use to hold key value pair, Doesn't stores duplicate values and remembers the order in which key value
// are stores inside of an object

const map = new Map();
map.set('PK', "Pakistan");
map.set('ENG', "England");
map.set('UAE', "United Arab Emirates");
map.set('ARG', "Argentina");

// console.log(map);

// now lets apply for of loop on it 

for (const value of map) { 
//  console.log(value);
}

// there is another short and more useable way to use it

for (const [key, value] of map) { 
    console.log(key, ":-", value);
}

