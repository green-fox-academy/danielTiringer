'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function rectangles(x,y,w,h,color){
    ctx.beginPath();
    ctx.fillStyle= color;
    ctx.fillRect(x,y,w,h);
}

rectangles(100, 100, 50, 180, "red");
rectangles(95, 320, 80, 50, "#bbbbbb");
rectangles(400, 250, 195, 35, "rgb(50, 80, 210)");
rectangles(450, 50, 65, 190, "magenta");