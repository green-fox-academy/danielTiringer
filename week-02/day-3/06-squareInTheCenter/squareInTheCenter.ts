'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

function centerSquare (x, y){
    ctx.beginPath();
    ctx.strokeRect(x-5, y-5, 10, 10);

};

centerSquare(300, 200);