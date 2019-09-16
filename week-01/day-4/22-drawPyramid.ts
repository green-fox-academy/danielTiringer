'use strict';

let lineCount: number = 4;
let star: string = '*';
let space: string = ' ';
let printString: string = '';
let starString: string = '*';
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
    
    for(let j = lineCount - i; j >= 1; j--){
        printString += space;
    };
    console.log(printString+starString);
    starString = starString + star + star;
    printString = '';
};