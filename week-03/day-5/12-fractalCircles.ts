'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let howManyTimes = 4;

ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle='black';
    ctx.lineWidth=1;
    ctx.stroke();

function drawCircle(startX, startY, radius, iteration){
    ctx.beginPath();
    ctx.arc(startX, startY - radius*0.5, radius/2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle='black';
    ctx.lineWidth=1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(startX - radius*0.433, startY + radius*0.25, radius / 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle='black';
    ctx.lineWidth=1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(startX + radius*0.433, startY + radius*0.25, radius / 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle='black';
    ctx.lineWidth=1;
    ctx.stroke();

    // drawCircle(startX - radius *0.866/2, startY + radius * 0.5/2, radius / 2, iteration + 1);
    if (iteration < howManyTimes){
        drawCircle(startX, startY - radius * 0.5, radius / 2, iteration + 1);
        drawCircle(startX - radius*0.433, startY + radius*0.25, radius / 2, iteration + 1);
        drawCircle(startX + radius*0.433, startY + radius*0.25, radius / 2, iteration + 1);
    }
}

drawCircle(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0);

