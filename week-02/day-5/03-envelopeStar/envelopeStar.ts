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

let quarters: number = 64;

for(let i = 0; i < canvas.height/2; i+=(canvas.height/quarters)){
    line(i, canvas.height/2, canvas.height/2, (canvas.height/2) -i, "green")
};

for(let i = 0; i < canvas.height/2; i+=(canvas.height/quarters)){
    line(canvas.height/2, i, canvas.height/2 + i, (canvas.height/2), "green")
}

for(let i = 0; i < canvas.height/2; i+=(canvas.height/quarters)){
    line(canvas.height - i, canvas.height/2, canvas.height/2, (canvas.height/2)+i, "green")
}

for(let i = 0; i < canvas.height/2; i+=(canvas.height/quarters)){
    line(canvas.height/2, canvas.height - i, canvas.height/2 - i, (canvas.height/2), "green")
}
