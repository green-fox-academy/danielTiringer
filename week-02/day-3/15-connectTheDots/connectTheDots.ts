'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function line(x, y){
    ctx.strokeStyle = "green";
    ctx.lineTo(x, y);
    ctx.stroke();
}

function restart(x, y){
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineTo(x, y);
    ctx.stroke();
}

let box: number [][] = [[10, 10], [290,  10], [290, 290], [10, 290]];

for(let i = 0; i <= box.length; i++){
    if(i<box.length){
        let a = box[i][0];
        let b = box[i][1];
        line(a,b);
    } else if (i = box.length) {
        let a = box[0][0];
        let b = box[0][1];
        line(a,b);
    }
};


let connect: number [][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

for(let i = 0; i <= connect.length; i++){
    if(i == 0){
        let a = connect[i][0];
        let b = connect[i][1];
        restart(a,b);
    } else {
        let a = connect[i][0];
        let b = connect[i][1];
        line(a,b);
    }
}