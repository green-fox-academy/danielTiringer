'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function purpleSquare (x, y) {
    ctx.beginPath();
    ctx.fillStyle = "purple";
    ctx.fillRect(x, x, y, y);
    ctx.strokeRect(x, x, y, y);
}


for(let i = 0; i < 20; i++){
    purpleSquare(i*10 + 10, 10);
}