'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: number = 20;
let height: number = size * Math.sqrt(3);
let width: number = size * 2;
let columns: number [] = [4, 5, 6, 7, 6, 5, 4];
let startH: number = 200;
let startV: number = 100;
let currentV: number = startV;
let currentH: number = startH;

function hexagon(a, b) {
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(a+width/2, b);
    ctx.lineTo(a+width*3/4, b+height*1/2);
    ctx.lineTo(a+width/2, b+height);
    ctx.lineTo(a, b+height);
    ctx.lineTo(a-width*1/4, b+height/2);
    ctx.lineTo(a, b);
    ctx.stroke();
}
for(let j = 0; j < columns.length; j++){

    for(let i = 0; i < 4; i++){
        hexagon(currentH, currentV + height*i);
    }
    currentH = currentH + width*3/4;
    currentV = currentV - height/2;
}