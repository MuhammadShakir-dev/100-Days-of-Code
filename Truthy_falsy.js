const user_Email = "Shakir@google.com";
const user_gender = "";

if (user_gender) {
    console.log("Got your email");
} else { 
    console.error("Opps! Something went worng");
}

// List of faly values in JS
// false, 0, -0, BigInt 0n, Null, undefined, Nan, "" 

// the above all are falsy values other then that all are truthy values.


// Lets see how we check that our array or object is empty

const myArray = [];
if (myArray.length == 0) { 
    console.log("Array is empty");
}

const myObj = {};
if (Object.keys(myObj).length == 0) { 
    console.log("Object is empty")
}