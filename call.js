// lets understand call and this in JavaScript  

function setUserName(name) { 
    this.name = name;
}

function createUser(name, email, password) { 
    setUserName.call(this, name);
    this.email = email;
    this.password = password;
}

const userOne = new createUser("Muhammad Shakir", "shakirxyz.com", "123124");
console.log(userOne); 
