'use strict';

let lineCount: number = 4;
let starString: string = '*'
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let i = 1; i <= lineCount; i++){
    console.log(starString);
    starString += '*';
}