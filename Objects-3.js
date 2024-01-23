// let's understand how to destructure objects in JavaScript 

const course = {
    id: 101,
    courseName: "How to become a Web Developer 2023",
    courseInstructor: "Colt",
    price: 10000
}

// now destructure the above object

console.log(course);
console.log(course.courseInstructor);

const { courseName: CN, courseInstructor: CI } = course;
console.log(`The course is ${CN} and the course instructor is ${CI}`);