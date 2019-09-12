'use strict';

let lineCount: number = 6;
let percent: string = '%';
let space: string = ' ';
let printOut: string = '%';
// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for(let i = 1 ;i <= lineCount ; i++){
    if(i == 1 || i == lineCount){
        for(let j = 1; j < lineCount; j++){
            printOut += percent;
        };
        console.log(printOut);
        printOut = '%';
    } else if(i > 1 && i < lineCount){
        for(let k = 1; k < lineCount-1; k++){
            printOut += space;
        };
        printOut += percent;
        console.log(printOut);
        printOut = '%';
    };
};