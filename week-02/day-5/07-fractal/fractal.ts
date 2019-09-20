'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath()
ctx.moveTo(canvas.width/4, canvas.width/4)
ctx.moveTo(canvas.width/2, canvas.width/2);
ctx.stroke();

let currentSide: number = canvas.width * 2;

function drawTriangle(a, b, level){
    if(level < 10){
        currentSide = currentSide/2
        // Left triangle
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(a+currentSide, b);
        ctx.lineTo(a+currentSide/2, b-Math.sqrt((currentSide**2-(currentSide/2)**2)));
        ctx.lineTo(a, b);
        ctx.closePath();
        ctx.stroke();
        
        // //Right triangle
        // ctx.beginPath();
        // ctx.moveTo(a+currentSide, b);
        // ctx.lineTo(a, b);
        // ctx.lineTo(a+currentSide/2, b-Math.sqrt((currentSide**2-(currentSide/2)**2)));
        // ctx.lineTo(a+currentSide, b);
        // ctx.closePath();
        // ctx.stroke();
        

        // // Top triangle
        // ctx.beginPath();
        // ctx.moveTo(a+currentSide/2, b);
        // ctx.lineTo(a+currentSide, b+Math.sqrt((currentSide**2-(currentSide/2)**2)));
        // ctx.lineTo(a+Math.sqrt((currentSide**2-(currentSide/2)**2)), b+Math.sqrt((currentSide**2-(currentSide/2)**2)));
        // ctx.lineTo(a+currentSide/2, b);
        // ctx.closePath();
        // ctx.stroke();

        

        let temp = level + 1;
        
        // Left repeater
        drawTriangle(a,b-Math.sqrt((currentSide**2-(currentSide/2)**2)),temp)

        //Right repeater
        drawTriangle(a+currentSide, b, temp)

        //Top repeater
        drawTriangle(a, b, temp)
    }
    
}


drawTriangle(0, Math.sqrt((canvas.width**2-(canvas.width/2)**2)), 0);

