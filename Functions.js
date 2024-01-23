// lets understand the power of funtions in js
// An additional thing you will learn with functions is memory managemant 

// lets write our first function
function sum(a,b) { 
    console.log(a+b);
};

// sum // this is funciton reference 
sum(11, 22); // this is function executon


// return keyword 
function subtract(num1, num2) { 
    return num1 - num2
};

console.log(subtract(9828, 9217));

// let's implement some logic here

function correctSum(num1 = 4, num2 = 4) { 
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else { 
        console.log("please write correct values");
    }
}

console.log(correctSum(11,2));

// we can also set default values when we are defining our funcitons.
console.log(correctSum()); // 8



 