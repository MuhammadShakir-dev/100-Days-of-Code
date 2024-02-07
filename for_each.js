// now lets understand for each loop in js

const coding_lang = ["JavaScript", "Python", "Java", "Ruby", "TypeScript", "Cpp"];

coding_lang.forEach(function (values) { 
   // console.log(values);
})

// lets use it with arrow function.
// Because it's a call back fucntion so that function never has a name.
coding_lang.forEach((values) => { 
 //   console.log(values);
})


// lets defined a function explicitly and then use it inside of a for each loop
const my_Func = (items) => { 
//    console.log(`Programming Language :- ${items}`);
}
coding_lang.forEach(my_Func); // note down one thing that don't execute the function here just pass the function reference


// for each have the access of the following three parameters called : items, index, array
coding_lang.forEach((item, index, arr) => { 
//    console.log(item, index, arr);
})

// lets do another more practical example.

const my_Phones = [
    {
        phoneName: "Google Pixel 6pro",
        phonePrice : 70000
    },

    {
        phoneName: "Google Pixel 7pro",
        phonePrice : 100000
    },

    {
        phoneName: "Iphone 15pro",
        phonePrice : 250000
    }
]

my_Phones.forEach((items) => { 
    console.log(items.phoneName + ":-" + items.phonePrice);
})