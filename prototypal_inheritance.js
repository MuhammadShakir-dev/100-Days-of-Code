
function multiplyBy(num) { 
    return num * 5;
}

// now im using an object property in the funciton 
// console.log(multiplyBy(5));

multiplyBy.power = 2;
// console.log(multiplyBy.power);

// console.log(multiplyBy.prototype);




const createUser = function(username, score) { 
    this.username = username;
    this.score = score

    return this
} 

// Is it possible to create your own function in the prototype or not? The ans is yes and you can also access them

createUser.prototype.incrementScore = function () { 
    this.score++
}

createUser.prototype.printMe = function () { 
    console.log(`this is score ${this.score}`);
}

const userOne = new createUser("Muhammad Shakir", 101);

userOne.incrementScore();
userOne.printMe();


/*
The scenes Functionality of new Keywords in JavaScript.

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function,
this means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound  to
the newly created object. if no explicit return value is specified from the constructor. JavaSciprt assumes this.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive
value (object, array, function, etc), The newly created object is returned.    

Note. JavaScript doesn't give you a constructor function through classes. It gives you a constructor function through
new Keyword 






*/




