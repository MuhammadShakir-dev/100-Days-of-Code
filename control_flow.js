// lets disscuss about control flow in JS
// There are different comparision operators in JS
/*    
    < // less than
    > // greator than
    <= // less than or equals to
    >= // greator than or equals to
    = // assignment operator
    == // equals to
    != // not equals
    === strict equal (checks tha value and the data type of the numbers)
*/


/*
Temperature Converter:
Create a temperature converter function that takes a temperature in Celsius as input. 
If the temperature is below freezing (0 degrees Celsius), return "It's freezing!"
If it's between 0 and 20 degrees, return "It's chilly." Otherwise, return "It's warm."
*/

const temp_Converter = (temperature) => { 
    if (temperature < 1) {
        return `Its Freezing`;
    } else if (temperature >= 1 && temperature <= 20) {
        return `It's chilly`;
    } else { 
        return `It's warm`;
    }
}
// console.log(temp_Converter(21));



/*
Grade Calculator:
Write a program that calculates the grade based on a student's score. 
If the score is above 90, return "A." If it's between 80 and 90, return "B." 
If it's between 70 and 80, return "C." If it's below 70, return "F."
*/

const grading_Calculator = (score) => { 
    if (score > 90) {
        return `A`
    } else if (score >= 80) {
        return `B`
    } else if (score >= 70) {
        return `C`
    } else if (score < 70) { 
        return `F`
    }
}
console.log(grading_Calculator(69));

/*
Login System:
Implement a simple login system. Ask the user to enter their username and password. 
If the username and password match predefined values, log them in. If not, display an error message.
*/

const user_One = {
    "user name": "Muhammad Shakir",
     password : "Pakistan1234@"
}

const loginAuthenticator = (username,  pas) => { 
    if (username === user_One["user name"] && pas === user_One.password) {
        console.log("Logging In....");
    } else { 
        console.log("The email or password you have entered seems to be incorrect");
    }
}

loginAuthenticator("Muhammad Shakir", "Pakistan1234@"); // logging In....
loginAuthenticator("Muhammad Shakir", "Pakistan1234"); // The email or password you have entered seems to be incorrect


/*
Shopping Cart:
Write a function that calculates the total cost of items in a shopping cart. 
If the total is above a certain threshold (e.g., $100), apply a discount of 10%. Otherwise, no discount is applied.
*/

const shoppingItemCostCalculator = (...items) => { 
    const total = items.reduce((acc, curr_Value) => acc + curr_Value, 0);
    return total;
}

console.log(shoppingItemCostCalculator(999, 882, 222, 777, 1099)); // 3979


