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

// make sure one thing that the type of date is object will check this.
console.log(typeof date); // object \\

// Now if you want to create a specific date let's do this.

let myCreatedDate = new Date(2024, 0, 13); 
console.log(myCreatedDate.toDateString()); // Sat Jan 13 2024

// Let's add a time in that.

let newCreatedDate = new Date(2024, 0, 10, 10, 30);
console.log(newCreatedDate.toLocaleString()); // 1/10/2024, 10:30:00 AM

// lets create a time stamp, now time stamp is used in Hotels booking apps.

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

// Note down one thing that proper way to compare thing is milliseconds


// Lets explore some others date methods in js

let newDate = new Date();
console.log(newDate.getDate()); // 13
console.log(newDate.getDay()); // 6
console.log(newDate.getFullYear()); // 2024
console.log(newDate.getMonth() +  1); // Add 1 in this way you will never confuse your end user

