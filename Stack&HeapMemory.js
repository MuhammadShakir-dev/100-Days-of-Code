// Stack & Heap memory
/*
    Stack => use with (Primitive Datatype)
        you will always get a copy of real value in Stack.

    Heap memory => use with (Non-Primitive Datatype)
        you will always get a refernce of original value in Heap.
*/

// Stack memory example.
let myMail = "chaudhryshakir@google.com";
let mainMail = myMail;
mainMail = "MuhammadShakirdev@google.com";

console.log(myMail);
console.log(mainMail);

// Heap memory example.
let userOne = {
    mail: "xyz@google.com",
    city: "karachi",
    gender: "male"
};

// Stack memory example.
let userTwo = userOne;
userTwo.mail = "Shakir.dev@google.com";
console.log(userOne);
console.log(userTwo);
