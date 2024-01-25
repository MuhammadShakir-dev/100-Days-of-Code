// Arrow funciton in JavaScript

// Arrow function comes in the es6 version.
// Before understanding arrow function lets understand this keyword first

// lets log this

console.log(this); // empty object because there is nothing in the Global context right now

let myUser = {
    name: "Muhammad Shakir",
    isLoggedIn: true,
    greeting: function () { 
        console.log(`${this.name} has successfully logged in`);
        console.log(this);
    }
}

myUser.greeting();


