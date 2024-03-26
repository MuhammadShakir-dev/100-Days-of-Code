let myName = "Muhammad Shakir";
let myUserName = "Muhammad Shakir dev  ";

// now i want to remove all the space in myUserName i know i can do this with .trim but this is not the
// solution i want i want to create my own method to do this.


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",
    
    getSpiderPower: function () { 
        console.log(`Spiderman power is ${this.spiderman}`);
    },

    getThorPower: function () { 
        console.log(`Thor power is ${this.thor}`);
    }
}

heroPower.getSpiderPower() // this is accessable 

Object.prototype.shakir = function () { 
    console.log("Shakir is present in all objects");
}

// So what i do? I just create a function in the prototpe of object it means that every object can access this.
heroPower.shakir();

// Now lets see if our array has access to this method or not because array is at the end of the day is object
myHeros.shakir();

// Now lets do a test that what if we inject a function in the array so is that function is avalible in the object
// or not.

Array.prototype.hiShakir = function () { 
    console.log("Hello I'm Shakir");
}

myHeros.hiShakir();
// heroPower.hiShakir(); // Error this is not a function


// Now lets do another example 

const user = {
    name: "Muhammad Shakir",
    age: 23,
    Skills: ["Front-end web Dev", "Community Building"],    
}    

const TeacherTrack = {
    track : "Front-end Web Development",
}

const Teacher = {
    makeVideo: true,
}

const TeacherSupport = {
    isAavalible: true, 
}



// Now what if i want to access the properties inside these object into one of them

Teacher.__proto__ = user;

// Now you can see i can access the properties of user in teacher 
console.log(Teacher.name);
console.log(Teacher.age);
// But all of this above code is the old syntax;


// The below is the new syntax
Object.setPrototypeOf(user, TeacherTrack);
console.log(user.track);


// Now lets get back to our main goal which is to create a method which removes all spaces from the string
// and gives you the actual length of the string


String.prototype.trueLength = function () { 
    console.log(`actul length of the string is ${this.trim().length}`);
}

myUserName.trueLength(); 
