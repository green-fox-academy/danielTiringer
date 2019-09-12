'use strict';

let lineCount: number = 4;
let starString: string = '*';
let printString: string = '';
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
for (let i = 1; i <= lineCount; i++){
    printString = '';
    for(let j = lineCount - i; j >= 1; j--){
        printString += ' ';
    };
    console.log(printString+starString);
    starString += '*';
    starString += '*';
};