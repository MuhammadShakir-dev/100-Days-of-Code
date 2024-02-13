// Lets practice filter, reduce and map in js 

const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        publishedDate: "1995"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publishedDate: "1990"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Science Fiction",
        publishedDate: "1999"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        publishedDate: "2000"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        publishedDate: "1951"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publishedDate: "1997"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publishedDate: "2003"
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        publishedDate: "2004"
    }
];

// lets filter out the data of books written after 2000
let filterOne = books.filter((items) => {
    return items.publishedDate >= 2000;
});
// console.log(filterOne);



// lets filter out the data of books written after 2000 and has a genre of Fantasy
let filterTwo = books.filter((item) => {
    return item.genre == "Fantasy" && item.publishedDate >= 2000;
});
// console.log(filterTwo);



// New data set of persons
const persons = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Eve', age: 28 },
    { id: 5, name: 'Michael', age: 40 }
];
  
// Task one: filter out the persons younger then 30 years

let filterThree = persons.filter((item) => {
    return item.age < 30;
});
// console.log(filterThree);


// Task Two: lets do the above funciton on one line statment

let filterFour = persons.filter(item => item.age > 30);
// console.log(filterFour);




// New Data set.
const employees = [
    { id: 1, name: 'John Doe', department: 'Sales', salary: 50000 },
    { id: 2, name: 'Alice Smith', department: 'Marketing', salary: 60000 },
    { id: 3, name: 'Bob Johnson', department: 'Engineering', salary: 70000 },
    { id: 4, name: 'Eve Williams', department: 'Sales', salary: 55000 },
    { id: 5, name: 'Michael Brown', department: 'Engineering', salary: 75000 }
  ];
  
// Task One: Filter employees who work in the Sales department:

let filterFive = employees.filter(person => person.department === "Sales");
// console.log(filterFive);


// Task Two: Filter employees who earn more than $60,000:

let filterSix = employees.filter(person => person.salary > 60000);
// console.log(filterSix);


// Task Three: Filter employees whose name starts with 'M':

let filterSeven = employees.filter(person => person.name[0] === "M");
console.log(filterSeven);


