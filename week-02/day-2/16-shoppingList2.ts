// Represent the following products with their prices

// Product	Amount
let price = {
    Milk: 1.07,
    Rice: 1.59,
    Eggs: 3.14,
    Cheese: 12.60,
    ChickenBreasts: 9.40,
    Apples: 2.31,
    Tomato: 2.58,
    Potato: 1.75,
    Onion: 1.10,
};
//Represent Bob's shopping list
// Product	Amount
let bobsList = {
    Milk: 3,
    Rice: 2,
    Eggs: 2,
    Cheese: 1,
    ChickenBreasts: 4,
    Apples: 1,
    Tomato: 2,
    Potato: 1,
}
//Represent Alice's shopping list
// Product	Amount
let alicesList = {
    Rice: 1,
    Eggs: 5,
    ChickenBreasts: 2,
    Apples: 1,
    Tomato: 10,
}

// Create an application which solves the following problems.

let check = {
    pay(array, name){
        let cash: number = 0;
        for(let i = 0; i < Object.keys(array).length; i++){
            cash += (price[Object.keys(array)[i]]*array[Object.keys(array)[i]]);
        };
        console.log(`${name}'s shopping list costs ${cash}.`);
    },
    compare(array1, name1, array2, name2, article){
        if(array1.hasOwnProperty(article) == false){
            array1[article] = 0;
        };
        if(array2.hasOwnProperty(article) == false){
            array2[article] = 0;
        }
        if(array1[article] > array2[article]){
            console.log(`${name1} buys more ${article}.`);
        } else if (array2[article] > array1[article]){
            console.log(`${name2} buys more ${article}.`);
        } else if (array1[article] == array2[article] && array1[article] != 0){
            console.log(`${name1} and ${name2} are buying the same amount of ${article}.`);
        } else if (array1[article] == array2[article] && array1[article] == 0){
            console.log(`Nobody wants any ${article}.`);
        }
    },
    howMany(array1, name1, array2, name2){
        let counter1: number = 0;
        let counter2: number = 0;
        for(let i = 0; i < Object.keys(array1).length; i++){
            counter1 += array1[Object.keys(array1)[i]];
        };
        for(let j = 0; j < Object.keys(array2).length; j++){
            counter2 += array2[Object.keys(array2)[j]];
        };
        if(counter1 > counter2){
            console.log(`${name1} buys more pieces.`);
        } else if (counter2 > counter1){
            console.log(`${name2} buys more pieces.`);
        } else if (counter1 == counter2){
            console.log(`${name1} and ${name2} are buying the same amount of pieces.`);
        }
    },
}

// How much does Bob pay?
// How much does Alice pay?
// Who buys more Rice?
// Who buys more Potato?
// Who buys more different products?
// Who buys more products? (piece)

check.pay(alicesList, "Alice");
check.pay(bobsList, "Bob");
check.compare(alicesList, "Alice", bobsList, "Bob", "Rice");
check.compare(alicesList, "Alice", bobsList, "Bob", "Potato");
check.howMany(alicesList, "Alice", bobsList, "Bob");
