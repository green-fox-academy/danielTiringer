'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(100,  50);
ctx.lineTo(100, 350);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'purple';
ctx.moveTo(100, 350);
ctx.lineTo(500, 350);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(500, 350);
ctx.lineTo(500,  50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(500,  50);
ctx.lineTo(100,  50);
ctx.stroke();
