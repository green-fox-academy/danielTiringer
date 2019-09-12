'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let row: string = '';
let percent: string = "%";
let space: string = ' ';
let boardSize: number = 8;

for(let i = 1; i <= boardSize; i++){
    for(let j = 1; j <= boardSize; j++){
        if(i % 2 != 0 && j % 2 == 0){
            row += space;
        } else if( i % 2 != 0 && j % 2 != 0) {
            row += percent;
        };
        if(i % 2 == 0 && j % 2 != 0){
            row += space;
        } else if(i % 2 == 0 && j % 2 == 0) {
            row += percent;
        };
    };
    console.log(row);
    row = '';
};