'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(array1, array2){
    let longer: number = 0;
    if(array1.length >= array2.length){
        longer = array1.length;
    } else if (array2.length > array1.length){
        longer = array2.length;
    };
    let matches: string [] = [];
    for(let i = 0; i < longer; i++){
            matches.push(array1[i]);
            matches.push(array2[i]);
    }
    return matches;
}

console.log(makingMatches(girls, boys));

export = makingMatches;