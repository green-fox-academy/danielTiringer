'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle(horizontalStart: number, verticalStart: number) : void{
    ctx.beginPath();
    ctx.moveTo(horizontalStart, verticalStart);
    ctx.lineTo(horizontalStart + side, verticalStart);
    ctx.lineTo(horizontalStart + side / 2, verticalStart-height);
    ctx.lineTo(horizontalStart, verticalStart);
    ctx.closePath();
    ctx.stroke();
}

let side: number = 20;
let rowCount: number = 15;
let height: number = Math.sqrt((side**2-(side/2)**2))

// Start position set to close to the bottom left corner of the canvas, but not quite, for visibility purposes
let startH: number = canvas.width *0.1;
let startV: number = canvas.height * 0.9;
let currentV = startV;
let currentH = startH;

for(let j = 0; j < rowCount; j++){
    
    for (let i = 0; i < rowCount - j; i++){
        triangle(currentH+i*side, currentV);
    };
    currentV -= height;
    currentH += side/2;
}
