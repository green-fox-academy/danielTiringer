'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function line(x, y, a, b, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
}

let start: number [] = []
let lineNumber: number = 32;
let multiplier: number = 8;
let quarterHeight = canvas.height / multiplier;
let quarterWidth = canvas.width / multiplier;

for(let j = 0; j < multiplier; j++){
    for(let k = 0; k < multiplier; k++){
        for(let i = 0; i < lineNumber; i++){
            line(i*quarterWidth/lineNumber+j*quarterWidth, 0+k*quarterHeight, quarterWidth+j*quarterWidth, i*quarterHeight/lineNumber+k*quarterHeight, "blue")
            line(0+j*quarterWidth, i*quarterHeight/lineNumber+k*quarterHeight, i*quarterWidth/lineNumber+j*quarterWidth, quarterHeight+k*quarterHeight, "magenta")
        }
    }
}