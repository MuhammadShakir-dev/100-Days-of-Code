
class User { 
    constructor(name) { 
        this.name = name
    }

    logMe() { 
        console.log(`Username is : ${this.name}`);
    }
}

class Teacher extends User{
    constructor(name, email, track) { 
        super(name)
        this.email = email;
        this.track = track;
    }

    teacherTrack() { 
        console.log(`Techer track is :${this.track}`);
    }
}

const userOne = new Teacher("shakir", "dev@dev.com", "Front-end dev");
console.log(userOne);
userOne.teacherTrack();
userOne.logMe();

const userTwo = new User("areyoushakir");
userTwo.logMe();





