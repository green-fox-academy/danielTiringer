'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let howManyTimes = 4;

// The beginning square is drawed on its own
ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeRect(canvas.width / 3, canvas.height / 4, canvas.height / 2, canvas.height / 2);

drawSquares(canvas.width / 3, canvas.height / 4, canvas.height / 2, 4, 0);

// The recursive function draws the squares on the corners only, not the main square
function drawSquares(startX, startY, widthAndHeight, lineWidth, iteration){
    ctx.beginPath();
    ctx.lineWidth = lineWidth*0.75;
    ctx.strokeRect(startX - widthAndHeight*0.25, startY - widthAndHeight/4, widthAndHeight/2, widthAndHeight/2);

    ctx.beginPath();
    ctx.lineWidth = lineWidth*0.75;
    ctx.strokeRect(startX + widthAndHeight*0.75, startY - widthAndHeight*0.25, widthAndHeight/2, widthAndHeight/2);

    ctx.beginPath();
    ctx.lineWidth = lineWidth*0.75;
    ctx.strokeRect(startX + widthAndHeight*0.75, startY + widthAndHeight*0.75, widthAndHeight/2, widthAndHeight/2);

    ctx.beginPath();
    ctx.lineWidth = lineWidth*0.75;
    ctx.strokeRect(startX - widthAndHeight*0.25, startY + widthAndHeight*0.75, widthAndHeight/2, widthAndHeight/2);

    if (howManyTimes > iteration){
        drawSquares(startX - widthAndHeight*0.25, startY - widthAndHeight/4, widthAndHeight/2, lineWidth*0.75, iteration + 1);
        drawSquares(startX + widthAndHeight*0.75, startY - widthAndHeight/4, widthAndHeight/2, lineWidth*0.75, iteration + 1)
        drawSquares(startX + widthAndHeight*0.75, startY + widthAndHeight * 0.75, widthAndHeight/2, lineWidth*0.75, iteration + 1)
        drawSquares(startX - widthAndHeight*0.25, startY + widthAndHeight * 0.75, widthAndHeight/2, lineWidth*0.75, iteration + 1)
    }
}
