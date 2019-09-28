'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let howManyTimes: number = 3;

let size: number = canvas.height / 2;
let height: number = size * Math.sqrt(3);
let width: number = size * 2;


function drawHexagon(topLeftX: number, topleftY: number, hexWidth: number, hexHeight: number) {
    ctx.beginPath();
    ctx.moveTo(topLeftX, topleftY);
    ctx.lineTo(topLeftX+hexWidth/2, topleftY);
    ctx.lineTo(topLeftX+hexWidth*3/4, topleftY+hexHeight*1/2);
    ctx.lineTo(topLeftX+hexWidth/2, topleftY+hexHeight);
    ctx.lineTo(topLeftX, topleftY+hexHeight);
    ctx.lineTo(topLeftX-hexWidth*1/4, topleftY+hexHeight/2);
    ctx.lineTo(topLeftX, topleftY);
    ctx.stroke();
}    
sixHexagons(canvas.width / 4, canvas.height / 12, width / 3, height / 3, 0)

drawHexagon(canvas.width / 4, canvas.height / 12, width, height)

function sixHexagons(topLeftX: number, topLeftY: number, hexWidth: number, hexHeight: number, level: number){
    // Top Left Hexagon
    drawHexagon(topLeftX, topLeftY, hexWidth, hexHeight);
    // Top right Hexagon
    drawHexagon(topLeftX + hexWidth, topLeftY, hexWidth, hexHeight);
    // Left Hexagon
    drawHexagon(topLeftX - hexWidth / 2, topLeftY + hexHeight, hexWidth, hexHeight);
    // Right Hexagon
    drawHexagon(topLeftX + hexWidth * 3 / 2, topLeftY + hexHeight, hexWidth, hexHeight);
    // Bottom Left Hexagon
    drawHexagon(topLeftX, topLeftY + hexHeight * 2, hexWidth, hexHeight)
    // Bottom Right Hexagon
    drawHexagon(topLeftX + hexWidth, topLeftY + hexHeight * 2, hexWidth, hexHeight)

    if(level < howManyTimes){
        // Top left repeater
        sixHexagons(topLeftX, topLeftY, hexWidth / 3, hexHeight / 3, level + 1);
        // Top right repeater
        sixHexagons(topLeftX + hexWidth, topLeftY, hexWidth / 3, hexHeight / 3, level + 1);
        // Left Hexagon
        sixHexagons(topLeftX - hexWidth / 2, topLeftY + hexHeight, hexWidth / 3, hexHeight / 3, level + 1);
        // Right Hexagon
        sixHexagons(topLeftX + hexWidth * 3 / 2, topLeftY + hexHeight, hexWidth / 3, hexHeight / 3, level + 1);
        // Bottom Left Hexagon
        sixHexagons(topLeftX, topLeftY + hexHeight * 2, hexWidth / 3, hexHeight / 3, level + 1);
        // Bottom Right Hexagon
        sixHexagons(topLeftX + hexWidth, topLeftY + hexHeight * 2, hexWidth / 3, hexHeight / 3, level + 1);
    }
}