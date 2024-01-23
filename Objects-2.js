// Lets have a deep look into objects in JS
// Lets understand how to create object with constructor method or with singleton

const tinderUser = new Object() // this is a singleton Object.
const twitterUser = {} // normal object or non singleton object.

// lets create two objects and then merge them.

const obj1 = {1: "A", 2: "B"};
const obj2 = { 3: "C", 4: "D" }; 

// the prevoius and wrong way

const obj4 = { obj1, obj2 };
console.log(obj4)


// new way and correct way
// Now in the assign method we have two parameters first-one is target and second one is source and on the above we gave target
// a blank object it means all source will mergerd in a new empty object if we don't write {} and write obj1 in the target
// then all the source will comes in the object one.     
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// Another and easy way to do this
const obj5 = { ...obj1, ...obj2 }; // using spread operator
console.log(obj5);

// When working with databases most of the you will data in the form of array of objects.

const data = [
    {
        id: 1,
        email: "xyz@gmail.com",
        isloggedIn: false 
        
    },

    {
        id: 2,
        email: "abc@gmail.com",
        isloggedIn : true
    }
]

// to access these values we have.

console.log(data[1].email);
console.log(data[0].email);

// lets have a look on how we can get an object keys and value and apply diff method on that.

const myAppUser = {
    id: 1,
    name: "Muhammad Shakir",
    email: "MuhammadShakirdev@gmail.com",
    location: "Karachi",
    age: 22
} 

// now lets print/log there values and keys

console.log(Object.keys(myAppUser)); // [ 'id', 'name', 'email', 'location', 'age' ]
console.log(Object.values(myAppUser)); // [ 1, 'Muhammad Shakir', 'MuhammadShakirdev@gmail.com', 'Karachi', 22 ]


// If you have a big number of object and you wanan get a value from the objects but not sure that the object has the value
// for this we have.

console.log(myAppUser.hasOwnProperty('isLoggedIn'));
console.log(myAppUser.hasOwnProperty('id'));
