'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let howManyTimes: number = 6;

let currentSide: number = canvas.width * 2;

ctx.beginPath();
ctx.moveTo(0, canvas.height);
ctx.lineTo(0+canvas.width / 2, 0);
ctx.lineTo(canvas.width, canvas.height);
ctx.lineTo(0, canvas.height);
ctx.closePath();
ctx.stroke();


drawTriangle(0, canvas.height, canvas.width / 2, canvas.height / 2, 0);

function drawTriangle(a, b, sideWidth, sideHeight, level){
    // Left triangle
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(a + sideWidth / 2, b - sideHeight);
    ctx.lineTo(a + sideWidth, b);
    ctx.lineTo(a, b);
    ctx.closePath();
    ctx.stroke();
    
    // Right triangle
    ctx.beginPath();
    ctx.moveTo(a + sideWidth, b);
    ctx.lineTo(a + sideWidth * 1.5, b - sideHeight);
    ctx.lineTo(a + sideWidth * 2, b);
    ctx.lineTo(a + sideWidth / 2, b);
    ctx.closePath();
    ctx.stroke();
        
        
    // Top triangle
    ctx.beginPath();
    ctx.moveTo(a + sideWidth / 2, b - sideHeight);
    ctx.lineTo(a + sideWidth * 1.5, b - sideHeight);
    ctx.lineTo(a + sideWidth, b - sideHeight * 2);
    ctx.lineTo(a + sideWidth / 2, b - sideHeight);
    ctx.closePath();
    ctx.stroke();
    
    if(level < howManyTimes){
        // Left repeater
        drawTriangle(a, b, sideWidth / 2, sideHeight / 2, level + 1);
        // Right repeater
        drawTriangle(a + sideWidth, b, sideWidth / 2, sideHeight / 2, level + 1);
        // Top repeater
        drawTriangle(a + sideWidth / 2, b - sideHeight, sideWidth / 2, sideHeight / 2, level + 1);
    }
    
}


