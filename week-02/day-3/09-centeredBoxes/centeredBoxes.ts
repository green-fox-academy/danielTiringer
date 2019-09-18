'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function center (x) {
    ctx.beginPath();
    ctx.strokeRect((canvas.width-x)/2, (canvas.height-x)/2, x, x);
}

center(50);
center(200);
center(250);
