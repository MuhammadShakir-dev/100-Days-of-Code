// lets understand the working of filter, reduce and map method in js

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = nums.filter((items) => { 
    return items % 2 === 0;
})
// console.log(isEven);

// lets do the same thing with for each 

let isOdd = [];
nums.forEach((items) => { 
    if (items % 2 != 0) { 
        isOdd.push(items)
    }
})
// console.log(isOdd);


// lets take a database and performs some filter operations on it
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

// Write a filter method that filter the fictions books
let fictionBooks = books.filter((items) => { 
    return items.genre === "Fiction"
})
// console.log(fictionBooks);



// Write a filter method that published in 2000 and onwards
let newlyPublished = books.filter((items) => {
    return items.publishedDate >= 2000
});
// console.log(newlyPublished);



// Write a filter method that filters the books published in or after 2000 and has genera of Fantasy

let newFilter = books.filter((items) => {
    return items.genre === "Fantasy" && items.publishedDate >= 2000
});
console.log(newFilter);

