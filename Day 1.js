// Premitive value copy
let a = 10;
let b = a;

console.log(a);
b = a + 2;
console.log(b);

// reference value copy
let ary = [1, 2, 3, 4];
let ary2 = ary;
ary2.pop();

console.log(ary);
console.log(ary2);
