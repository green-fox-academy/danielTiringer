'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSeven (array) {
    let random = Math.floor(Math.random()*2);
    let result: string = "Noooooo"
    if(random == 0){
        array.forEach(function check (element){
            if (element == 7){
                result = "Hoorray"
            };
        });
    } else if (random == 1){
        if (array.indexOf(7) != -1) {
            result = "Hoorray"
        };
    };
    return result;
};

export = containsSeven;