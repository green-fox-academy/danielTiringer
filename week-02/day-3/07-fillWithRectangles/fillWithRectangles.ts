'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function rectangles(x,y,color){
    ctx.beginPath();
    ctx.fillStyle= color;
    ctx.fillRect(x,y,x,y);
}

for(let i = 0; i < 4; i++) {
    rectangles(Math.random() * canvas.width, Math.random() * canvas.height, `rgb(${Math.random()* 255}, ${Math.random()* 255}, ${Math.random()* 255}`);
}