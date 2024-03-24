// Object literals

const user = {
    username: "Muhammad Shakir",
    loginCount: 8,
    singedIn : true
}
// This is your object and object literal in JS, JS mein isi ko base unit kehty hein and yahi apka object literal hai


const sum = {
    valueOne: 12,
    valueTwo: 13,
    sum: function () { 
        return this.valueOne + this.valueTwo
    }
}

console.log(sum.sum());
 
// this refers to the current context


// Now lets move towards new keywords which is also known as constructor function

const mainUser = function (username, password, islogedIn) { 
    this.username = username;
    this.password = password;
    this.islogedIn = islogedIn;

    return this
}

// const userOne = mainUser('Muhammad Shakir', 'Pakistan1234567890', true);
// const userTwo = mainUser('Muhammad Haris', 'harisawan12334442', false);
// console.log(userOne);

// now the issue above is that when you pass the new arrguments in user two these arrguments will overwrite the 
// previous once which is userOne because you are working with the original function not a copy of it
// the solution here is to use new keyword which allow you to make a copy of original once.


const userOne = new mainUser('Muhammad Shakir', 'Pakistan1234567890', true);
const userTwo = new mainUser('Muhammad Haris', 'harisawan12334442', false);

console.log(userOne);
console.log(userTwo);

