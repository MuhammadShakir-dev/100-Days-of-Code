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

function random() { 
    let username = "Shakir";
    console.log(this.username); // undefined 
}
random()
// You will get the output of undefined because this keyword doesnot works with functions it will work with objects.


// Another way to writing a function
const random_Two = function () { 
    let name = "Shakir";
    console.log(this.name); // undefined
}
random_Two()


// Lets do this with arrow function
const random_Three = () => { 
    let github_Username = "MuhammadShakir-dev";
    console.log(this.github_Username); // undefined
}
random_Three()


// Lets add two numbers.
const sum = (num1, num2) => { 
    return num1 + num2
}

console.log(sum(7, 4)); // this is arrow function with explicit return

// there is another way to do this which is called arrow function with implicit return
const mul = (num1, num2) => (num1 * num2);
console.log(mul(2, 3));

// another way to do this
const sqrt = (num) => Math.sqrt(num);
console.log(sqrt(144)); 

// make one thing that this implicit return will use alot of time in react

// it will also help you when you return an object.
const ran = (username) => ({ name: username });
console.log(ran("Shakir"));