'use strict';

let lineCount: number = 4;
let star: string = '*';
let space: string = ' ';
let printString: string = '';
let starString: string = '*';

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
for (let i = 1; i <= lineCount; i++){
    printString = '';
    for(let j = lineCount - i; j >= 1; j--){
        printString += space;
    };
    console.log(printString+starString);
    starString = starString + star + star;
};
starString = starString.slice(0, -2);
for(let k = lineCount -1; k > 0; k--){
    printString += space;
    starString = starString.slice(0, -2);
    console.log(printString+starString);
};
