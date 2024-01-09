// Write a function helloWorld that simply returns the string "Hello, World!".

function helloWorld() { 
    return "Hello, World!";
}

console.log(helloWorld());

// Write a function addNumbers that takes two parameters (numbers) and returns their sum.

function sum(num1, num2) { 
    return num1 + num2;
}

console.log(sum(12, 12));

// Write a function multiplyNumbers that takes two parameters (numbers) and returns their product.

function product(num1, num2) { 
    return num1 * num2
}

console.log(product(12,12));

// Write a function stringLength that takes a string as a parameter and returns its length.

function strlength(str) { 
    return str.length
}

console.log(strlength("Muhammad Shakir"));

// Write a function isEven that takes an integer as a parameter and returns true if it's even and false if it's odd.

function isEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else { 
        return "Odd";
    }
}

console.log(isEvenOdd(12));