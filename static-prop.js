class User { 
    constructor(username) { 
        this.username = username
    }

    logMe() { 
        console.log(`USERNAME IS : ${this.username}`);
    }

    static createId() { 
        let randomID = parseInt(Math.random() * 100 + 1);
        console.log(`${this.username} your unique ID is : ${randomID}`);
    }
}

const newUser = new User("Shakir");
newUser.createId();
// this method generate a new id for me every time i call this method but if don't wana do this so just
// use static keyword which will not allow any other object that is instanciate from this object to use it


// lets see if a class inherit by user class can access of createId or not

class Teacher extends User { 
    constructor(username, email) {
        super(username)
        this.email = email
    }
}


const teacherOne = new Teacher("NotionChamp", "Btyewise.com");
teacherOne.createId(); // this is not a function
