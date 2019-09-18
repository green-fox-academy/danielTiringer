'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squarePosition (x, y) {
    ctx.beginPath();
    ctx.fillRect(x, y, 50, 50);
}

squarePosition(50, 50);
squarePosition(50, 150);
squarePosition(150, 50);
squarePosition(150, 150);