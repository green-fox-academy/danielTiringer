'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let howManyTimes: number = 6;

ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height * 0.75);
ctx.lineTo(canvas.width / 2, canvas.height * 0.75 - canvas.height * 0.1);

ctx.stroke();

drawLines(canvas.width / 2, canvas.height * 0.75 - canvas.height * 0.1, 100, 0);

function drawLines(startWidth, startHeight, length, level){
    // Left line
    ctx.beginPath();
    ctx.moveTo(startWidth, startHeight);
    ctx.lineTo(startWidth - (length * Math.cos(60) * Math.PI), startHeight);

    // Right line
    
    // Center line
    // ctx.beginPath();
    // ctx.moveTo(canvas.width / 2, canvas.height * 0.75);
    // ctx.lineTo(canvas.width / 2, canvas.height * 0.75 - canvas.height * 0.1);

    
    if(level < howManyTimes){
        // Left repeater
        
        // Right repeater
        
        // Top repeater
        
    }
    
}