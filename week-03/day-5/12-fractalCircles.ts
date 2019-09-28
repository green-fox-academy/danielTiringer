'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let howManyTimes = 4;

class Circle {
    private _endAngle: number = 2 * Math.PI;
    private _color: string = 'black';
    private _lineThickness: number = 1;

    public drawOuterCircle(startX, startY){
        ctx.beginPath();
        ctx.arc(startX, startY, canvas.height / 2, 0, this._endAngle
        );
        ctx.closePath();
        ctx.strokeStyle = this._color;
        ctx.lineWidth=1;
        ctx.stroke();
    }

    public drawInnerCircle(startX, startY, radius, iteration){
        ctx.strokeStyle = this._color;
        ctx.lineWidth = this._lineThickness;
        // Top circle
        ctx.beginPath();
        ctx.arc(startX, startY - radius*0.5, radius/2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.lineWidth=1;
        ctx.stroke();
        // Left circle
        ctx.beginPath();
        ctx.arc(startX - radius*0.433, startY + radius*0.25, radius / 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.lineWidth=1;
        ctx.stroke();
        // Right circle
        ctx.beginPath();
        ctx.arc(startX + radius*0.433, startY + radius*0.25, radius / 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();

        if (iteration < howManyTimes){
            this.drawInnerCircle(startX, startY - radius * 0.5, radius / 2, iteration + 1);
            this.drawInnerCircle(startX - radius*0.433, startY + radius*0.25, radius / 2, iteration + 1);
            this.drawInnerCircle(startX + radius*0.433, startY + radius*0.25, radius / 2, iteration + 1);
        }
    }
}

let fractalCircle = new Circle;
fractalCircle.drawOuterCircle(canvas.width / 2, canvas.height / 2);
fractalCircle.drawInnerCircle(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0);



// This is how the code was originally written, without classes, only using functions.

// let howManyTimes = 4;

// ctx.beginPath();
//     ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, 2 * Math.PI);
//     ctx.closePath();
//     ctx.strokeStyle='black';
//     ctx.lineWidth=1;
//     ctx.stroke();

// function drawCircle(startX, startY, radius, iteration){
//     ctx.beginPath();
//     ctx.arc(startX, startY - radius*0.5, radius/2, 0, 2 * Math.PI);
//     ctx.closePath();
//     ctx.strokeStyle='black';
//     ctx.lineWidth=1;
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(startX - radius*0.433, startY + radius*0.25, radius / 2, 0, 2 * Math.PI);
//     ctx.closePath();
//     ctx.strokeStyle='black';
//     ctx.lineWidth=1;
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(startX + radius*0.433, startY + radius*0.25, radius / 2, 0, 2 * Math.PI);
//     ctx.closePath();
//     ctx.strokeStyle='black';
//     ctx.lineWidth=1;
//     ctx.stroke();

//     // drawCircle(startX - radius *0.866/2, startY + radius * 0.5/2, radius / 2, iteration + 1);
//     if (iteration < howManyTimes){
//         drawCircle(startX, startY - radius * 0.5, radius / 2, iteration + 1);
//         drawCircle(startX - radius*0.433, startY + radius*0.25, radius / 2, iteration + 1);
//         drawCircle(startX + radius*0.433, startY + radius*0.25, radius / 2, iteration + 1);
//     }
// }

// drawCircle(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0);

