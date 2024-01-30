/*
Nullesh Coaleascing Operator ?? : used for undefined and null

This is newly introduced operator in JS that has a impact use when you are working with Databases, FirseBase and
fetching some request from the server so in that case you will get two values and that values sometime be
null or undefined so in that case your whole code structure will be distrubed if you don't use this operator

*/

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5 

let val2;
val2 = null ?? 15;
console.log(val2); // 15

let val3;
val3 = "Here is your data" ?? undefined;
console.log(val3); // Here is your data

let val4;
val4 = undefined ?? 10 ?? 15;
console.log(val4); // 10


/*
Basically its your fallback for how to handles errors if we have.
*/

