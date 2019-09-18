'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function black (x, y, z){
    ctx.beginPath();
    ctx.fillRect(x, y, z, z);
}
let checkSize: number = 20;
for(let i = 0; i < checkSize * 600; i++){
    for(let j = 0; j < 50; j++){
        if(i % 2 == 0 && j % 2 == 0){
            black(i*checkSize,j*checkSize,1*checkSize);
        } else if (i % 2 != 0 && j % 2 != 0){
            black(i*checkSize,j*checkSize,1*checkSize);
        }
    }
}