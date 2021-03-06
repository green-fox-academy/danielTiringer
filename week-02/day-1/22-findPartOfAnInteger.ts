'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices (indexes) of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

// The idea is to convert both the reference number (the first argument in the subint) and the array elements (the elements in the second argument in the subint) to string, and the compare them to eachother.

let result: number[] = [];

function subint(number, array) {
    result = [];
    let str: string;
    let stringNumber: string = number.toString();
    for(let i = 0; i < array.length; i++){
        str = array[i].toString();
        if(str.substring(0, 1) == stringNumber){
            result.push(i);
        } else if (str.substring(1,2) == stringNumber){
            result.push(i);
        }
    };
    return result;
};   

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'
