// lets have a little bit deep look into our functions.

// Rest parameter
// lets create a function that hold the price of all the items in the card in an array.

function cartItemPrices(...items) { 
    const total = items.reduce((accValue, currValue) => accValue + currValue, 0);
    return `Your bill is : ${total} /pkr`
}
console.log(cartItemPrices(200, 300, 982, 1000, 1233, 1213, 4500));

// how to take object as a function arrgument.

function userInfo(obj) { 
    console.log(`Hello! ${obj.username}. Welcome to Notion Community as a ${obj.desig}`);
}

userInfo({
    username: "Muhammad Shakir",
    desig: "Campus Leader"
})

// how to take array as a function arrgument

function getSecondNumber(getArray) { 
    return getArray[1];
}

console.log(getSecondNumber([200,300,303,4000]));