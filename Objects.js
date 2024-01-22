// Let's build our concepts on Objects
// To understand the importance of Objects in JS we can say that. If you wannna lean JS learn Objects and events
// in depth  

// Now there are three ways to declear objects in JS.

// singleton
// You can also create objects by another method called constructor method and singleton will also made inside this
// Object.create; 


// object literals
const JsUser = {
    name: "Muhammad Shakir",
    age: 22,
    location: "Karachi",
    email: "Shakir@google.com",
    isLogedIn: false,
    lastLoginDays: ['Monday', 'Friday', 'Sunday']
}; 

// Now how to access Object values?
// There are two ways by which you can access the object keys.

console.log(JsUser.name);

// But the issue on the above method is that its not working in all the cases.
// Lets do an interview question here 
// Declear a symbol outside the object and use that symbol inside your object.

const mySym = Symbol("key1");

const newUser = {
    name: "Rehan Sattar",
    "GitHub usrname": "Rehan-Sattar.dev",
    [mySym] : 77
}

// now to access the GitHub username there is no chance to print there value by using the above mehtod.
// So for this we have 

console.log(newUser["GitHub usrname"]);
console.log(typeof newUser[mySym]);

// if you want to freez your object like you dont want/allow anyone to change object values.
Object.freeze(newUser);  
console.log(newUser);

// lets create a function inside our object.

JsUser.greeting = function () { 
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greeting());

