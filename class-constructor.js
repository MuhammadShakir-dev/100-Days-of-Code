
//let's understand more about class constructors and static in JavaScript.
// All of this comes after or in ES6


class User { 
    constructor(name, email, password) { 
        this.name = name;
        this.email = email;
        this.password = password;

        return this
    }

    changeUserName(){ 
        return `${this.name.toUpperCase()}`
    }

    setUserName() {
        return `${this.name.trim()}.codingdev` 
    }    
    
}

const userOne = new User("Muhammad Shakir", "shakir@xyz", "hajks222");
console.log(userOne);
// console.log(userOne.changeUserName());
// console.log(userOne.setUserName());


// behind the scenes 

function user(name, email, password) { 
    this.name = name;
    this.password = password;
    this.email = email;

    return this;
} 

user.prototype.changeUserName = function(){ 
    return `${this.name.toUpperCase()}`;
}

user.prototype.setUserName = function () { 
    return `${this.name.trim()}.codingdev`; 
}

const userTwo = new user("Haris", "Harisxyz@go", "asdasdf");
console.log(userTwo);
console.log(userTwo.setUserName());

