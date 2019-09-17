// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550

let product = {
    Eggs: 200,
    Milk: 200,
    Fish: 400,
    Apples: 150,
    Bread: 50,
    Chicken: 550,
}

// Create an application which solves the following problems.

// How much is the fish?
// What is the most expensive product?
// What is the average price?
// How many products' price is below 300?
// Is there anything we can buy for exactly 125?
// What is the cheapest product?

let price = {
    max(array): number{
        let highest: number = 0;
        for(let i = 0; i < Object.keys(array).length; i++){
            if(array[Object.keys(array)[i]] > highest){
                highest = array[Object.keys(array)[i]];
            }
        }
        return highest;    
    },
    average(array): number{
        let sum: number = 0;
        for(let i = 0; i < Object.keys(array).length; i++){
            sum += array[Object.keys(array)[i]];
        }
        return Math.round((sum / Object.keys(array).length)); 
    },
    min(array): number{
        let lowest: number = 0;
        for(let i = 0; i < Object.keys(array).length; i++){
            if(array[Object.keys(array)[i]] < lowest || lowest == 0){
                lowest = array[Object.keys(array)[i]];
            }
        }
        return lowest;    
    },
    under300(array): number{
        let counter: number = 0;
        for(let i = 0; i < Object.keys(array).length; i++){
            if(array[Object.keys(array)[i]] < 300){
                counter++;
            }
        }
        return counter; 
    },
    exactly125(array){
        let hundredTwentyFive: number = 0;
        for(let i = 0; i < Object.keys(array).length; i++){
            if(array[Object.keys(array)[i]] = hundredTwentyFive){
                hundredTwentyFive++;
            }
        }
        if(hundredTwentyFive > 0){
            console.log("There is something for 125");
        } else {
            console.log("There's nothing for 125");
        }      
    },
}

console.log(`The fish is ${product.Fish}`);
console.log('The most expensive product costs ' + price.max(product));
console.log('The average product price is ' + price.average(product));
console.log(`We can buy ${price.under300(product)} products under 300.`)
price.exactly125(product);
console.log('The cheapest product\'s price is ' + price.min(product));