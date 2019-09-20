'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function slice(start, outerRadius, innerRadius, fill){
    start = (start+0.5)*Math.PI/10;
    let end = start + Math.PI/10
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,outerRadius,start,end);
    ctx.arc(canvas.width/2,canvas.height/2,innerRadius,end, start, true);
    ctx.closePath();
    ctx.fillStyle=fill;
    ctx.strokeStyle='black';
    ctx.lineWidth=1;
    ctx.fill();
    ctx.stroke();
}

for(let i: number = 0; i < 20; i++){
    if(i % 2 == 0){
        slice(i, 200, 185, 'red');
        slice(i, 185, 100, 'black');
        slice(i, 100, 85, 'red');
        slice(i, 85, 20, 'black');
    } else if (i % 2 != 0){
        slice(i, 100, 85, 'green');
        slice(i, 200, 185, 'green');
    }
}

function ring(start, outerRadius, innerRadius, fill){
    let end = start + Math.PI*2;
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,outerRadius,start,end);
    ctx.arc(canvas.width/2,canvas.height/2,innerRadius, end, start, true);
    ctx.closePath();
    ctx.fillStyle=fill;
//    ctx.strokeStyle='black';
//    ctx.lineWidth=1;
    ctx.fill();
    ctx.stroke();
};

ring(0, 250, 200, 'black')
ring(0, 20, 10, 'green');
ring(0, 10, 0, 'red');

