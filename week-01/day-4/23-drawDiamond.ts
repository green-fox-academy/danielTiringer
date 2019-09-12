'use strict';

let lineCount: number = 7;
let starString: string = '*';
let printString: string = '';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
for (let i = 1; i <= Math.ceil(lineCount/2); i++){
    printString = '';
    for(let j = Math.ceil(lineCount/2) - i; j >= 1; j--){
        printString += ' ';
    };
    console.log(printString+starString);
    starString += '*';
    starString += '*';
};
starString = starString.slice(0,-2);
printString = ' ';
for(let k = 2; k <= Math.ceil(lineCount/2); k++){
    starString = starString.slice(0,-2);
    console.log(printString + starString);
    printString += ' ';
};