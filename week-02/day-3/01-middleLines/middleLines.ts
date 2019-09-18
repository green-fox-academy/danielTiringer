'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(150, 200);
ctx.lineTo(450, 200);
ctx.stroke();

// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(300,  50);
ctx.lineTo(300, 350);
ctx.stroke();