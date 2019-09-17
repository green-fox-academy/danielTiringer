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

// Which products cost less than 201? (just the name)
// Which products cost more than 150? (name + price)

let price = {
    under201(array){
        let cheap: string[] = [];
        for(let i = 0; i < Object.keys(array).length; i++){
            if(array[Object.keys(array)[i]] < 201){
                cheap.push(Object.keys(array)[i]);
            }
        }
        console.log('The following products are available for under 201: ' + cheap.join(', '));    
    },
    over150(array){
        let name: string[] = [];
        let price: number[] = [];
        for(let i = 0; i < Object.keys(array).length; i++){
            if(array[Object.keys(array)[i]] > 150){
                name.push(Object.keys(array)[i]);
                price.push(array[Object.keys(array)[i]])
            }
        }

        console.log('The following products are available for over 150: ' + name.join(', ') + ', for the following prices, respectively: ' + price.join(', '));    
    },
}

price.under201(product);
price.over150(product);
