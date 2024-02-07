// lets understand the use of reduce funtion in js

const myNums = [1, 2, 3];
// const total = myNums.reduce((acc, currValue) => acc + currValue, 0);
// console.log(total);



// lets see the value that is store in acc and curr value every time
const newTotal = myNums.reduce((acc, currValue) => { 
    console.log(`acc value : ${acc} , current value : ${currValue}`)
    return acc + currValue
}, 0)
console.log(newTotal);


// lets take a more practical example of reduce to uderstand it better
const courses = [
    {
        name: "Web Development",
        price: 199.99
    },
    {
        name: "Mobile App Development",
        price: 249.99
    },
    {
        name: "Programming Fundamentals",
        price: 149.99
    },
    {
        name: "Database Management",
        price: 179.99
    },
    // Add more courses as needed
];

const priceToPay = courses.reduce((acc, items) => acc + items.price, 0);
console.log(priceToPay);