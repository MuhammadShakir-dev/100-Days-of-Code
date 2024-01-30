// Imediatly Invoked Function Expressions IFFE.

// What is IFEE?
// IFEE is Imddiatly invoked/execute itself after the function defintion.

// Why we use IFEE?
// Some time we don't want to get our function be polluted by some variables in Globel scope so to get rid from this
// we use IFEE.

(function add(num1, num2) {
    // this is named IFEE because it has a name : add
    console.log(num1 + num2);
})(3, 4);

(() => {
    // this is simple IFEE
    console.log("Database Connected successfully");
})();

