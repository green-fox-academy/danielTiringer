'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function line(x, y, a, b, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
}

for(let i = 0; i < canvas.height; i+=20){
    line(i, 0, 0, canvas.height - i, "red")
}

for(let j = 0; j < canvas.height; j+=20){
    line(canvas.height+200, j, canvas.height - j+200, canvas.height, "green")
}

for(let k = 0; k < canvas.height; k+=20){
    line(200 + k, 0, canvas.height + 200, k, "blue")
}

for(let q = 0; q < canvas.height; q+=20){
    line(0, q, q, canvas.height, "magenta")
}