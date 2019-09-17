// We are going to represent our expenses in a list containing integers.

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120

let expenses: number [] = [500, 1000, 1250, 175, 800, 120];

// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?

let sum: number = 0;
let max: number = 0;
let min: number = 0;

for (let i = 0; i < expenses.length; i++){
    sum += expenses[i];
    if(expenses[i] > max){
        max = expenses[i];
    };
    if(expenses[i] < min || min == 0) {
        min = expenses[i];
    }
}

console.log(`We spent ${sum} total.
The biggest expense was ${max}.
The cheapest spending was ${min}.
The average amount of spending was ${Math.round(sum/expenses.length)}`);
