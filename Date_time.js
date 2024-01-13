// Lets understand Date and time in js

// First will create a Date object and its instance.

let date = new Date();
console.log(date); // 2024-01-13T04:38:44.886Z : But it's not a readable form.

console.log(date.toString()); // Sat Jan 13 2024 09:39:41 GMT+0500 (Pakistan Standard Time)
console.log(date.toDateString()); // Sat Jan 13 2024 
console.log(date.toISOString()); // 2024-01-13T04:41:43.855Z
console.log(date.toLocaleDateString()); // 1/13/2024
console.log(date.toJSON()); // 2024-01-13T04:42:38.689Z
console.log(date.toLocaleTimeString()); // 9:43:13 AM