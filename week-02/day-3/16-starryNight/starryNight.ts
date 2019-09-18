'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function star (x, y, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 5, 5);
};

for(let i = 0; i < 350; i++){
    star(Math.random()*600, Math.random()*400, `rgb(${Math.random()* 255}, ${Math.random()* 255}, ${Math.random()* 255}`);
}
