'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle(a, b){
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(a+side, b);
    ctx.lineTo(a+side/2, b-height);
    ctx.lineTo(a, b);
    ctx.stroke();
}

let side: number = 15;
let height: number = Math.sqrt((side**2-(side/2)**2)) // Math.sqrt(side^2-(side/2)^2)
let startH: number = 50;
let startV: number = 350;
let currentV = startV;
let currentH = startH;

for(let j = 0; j < 20; j++){
    
    for (let i = 0; i < 20-j; i++){
        triangle(currentH+i*side, currentV);
    };
    currentV -= height;
    currentH += side/2;
}
