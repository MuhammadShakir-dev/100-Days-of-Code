
//let's have a deep look into some important object properties which will help you understand objects better

console.log(Math.PI);

Math.PI = 5;
console.log(Math.PI); // the value PI is not changed because we don't have the write to change this 

// How to check which properties we have access to in Math module
const values = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(values);

const user = {
    name: "Muhammad Shakir",
    age: 21,
    email: "areyoushakir@gmai.com",
    id: 77,

    createUserName: function () { 
        console.log(`Your username is ${this.name}@js`);
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Now lets have a look on how we can define our own properties in Objects

Object.defineProperty(user, "id", {
    enumerable: false,
})

// for (let [key, value] of user) { 
//     console.log(`${key} : ${value}`); // user isnot itteratable why?
// }

// In Javascript object is by default iterable or not it depends on the condition of the code
// So in this condition, our object is not iterable so to make it iterable we use a property

// for (let [key, value] of Object.entries(user)) { 
//     console.log(`${key} : ${value}`);
// }

// But our above code is not that much efficient to survive in all conditions so we need to write a check in it

for (let [key, value] of Object.entries(user)) { 
    if (typeof value !== "function") { 
        console.log(`${key} : ${value}`);
    }
}
