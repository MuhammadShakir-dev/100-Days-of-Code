
const anotherUser = {
    _username: "shakir",
    _email: "shakir@gmail.com",

    get username() { 
        return this._username.toUpperCase()
    },

    set username(value) {
        this._username = value;
    }
} 

let userTwo = Object.create(anotherUser);
console.log(userTwo.username);
