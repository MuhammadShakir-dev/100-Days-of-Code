
Object.prototype.calculateBmi = function (name, height, weight) { 
    this.name = name;
    this.height = height;
    this.weight = weight;

    console.log(`${this.name} your BMI is: ${(this.weight / ((this.height * this.height) / 10000)).toFixed(2)}`);
}


calculateBmi("Muhammad Shakir", 178, 57.5);
calculateBmi("Muhammad Haris", 178, 59);

// const bmi = (weight / ((height * height) / 10000)).toFixed(2)


String.prototype.trueLength = function () { 
    console.log(`The actual length of your string is : ${this.trim().length}`);
}

"Muhammad Shakir dev".trueLength();
"areyoushakir       ".trueLength();




// let teacher = {
//     isTecher: true,
//     isAvalible: true,
//     track: "Front-end Devlopment",
//     creditHours: 20
// }

// let user = {
//     name: "Muhammad Shakir",
//     age: 23,
//     email: "areyoushakir@xyz.com",
//     __proto__ : teacher
// }

// console.log(user.isTecher);

// but this stuff is old dated


// Nowdays we use
let teacher = {
    isTecher: true,
    isAvalible: true,
    track: "Front-end Devlopment",
    creditHours: 20
}

let user = {
    name: "Muhammad Shakir",
    age: 23,
    email: "areyoushakir@xyz.com",
}
Object.setPrototypeOf(user, teacher);
console.log(user.track);
console.log(user.creditHours);



