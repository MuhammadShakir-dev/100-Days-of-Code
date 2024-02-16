// lets practice reduce in JS by solving some real world problems

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

// Calculate the total number of price student have to pay using reduce
let priceToPay = courses.reduce((acc, items) => acc + items.price, 0);
// console.log(priceToPay);


// Problem no: 2
// Your task: Use the reduce method to calculate the total sum of all purchases
// converting all amounts to USD, assuming conversion rates are available.

const transactions = [
    { amount: 50, currency: 'USD' },
    { amount: 20, currency: 'EUR' },
    { amount: 30, currency: 'GBP' },
    { amount: 40, currency: 'USD' }
]; 
  
const conversionRates = {
    'EUR': 1.18, // 1 EUR = 1.18 USD
    'GBP': 1.38  // 1 GBP = 1.38 USD
}


// Task no: 1 = Your task: Use the reduce method to calculate the total sum of all purchases
let sumOfPurchases = transactions.reduce((acc, purchases) => acc + purchases.amount, 0);
console.log(sumOfPurchases); 


// Task no: 2 = converting all amounts to USD, assuming conversion rates are available.
let totalInUSD = transactions.reduce((acc, transaction) =>  { 
    if (transaction.currency === 'USD') {
        return acc + transaction.amount;
    }
    else { 
        const exchangeRate = conversionRates[transaction.currency]; 
        return acc + (transaction.amount * exchangeRate);
    }   
}, 0)

console.log(`${totalInUSD} USD`);


// Problem no: 3
const temperatures = [23, 25, 21, 26, 24, 22, 27];

// Your task: Use the reduce method to find the highest temperature recorded.
// Output the highest temperature.


let maxTemperature = temperatures.reduce((currTemp, maxTemp) => { 
    if (currTemp > maxTemp) {
        return currTemp;
    } else { 
        return maxTemp
    }
})

console.log(maxTemperature);



// Problem no: 4
const expenses = [
    { category: 'Office Supplies', amount: 100 },
    { category: 'Travel', amount: 250 },
    { category: 'Food', amount: 150 },
    { category: 'Office Supplies', amount: 50 },
    { category: 'Travel', amount: 300 },
    { category: 'Food', amount: 200 },
  ];
  
// Your task: Use the reduce method to calculate the total amount spent in each expense category.
// Output the total amount spent in each category.

const totalExpensesByCategory = expenses.reduce((acc, expense) => {
    // Check if the category exists in the accumulator
    if (acc.hasOwnProperty(expense.category)) {
      // If the category exists, add the amount to its total
      acc[expense.category] += expense.amount;
    } else {
      // If the category doesn't exist, initialize it with the amount
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});
  

  console.log("Total expenses by category:", totalExpensesByCategory);




