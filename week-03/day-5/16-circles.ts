'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let howManyTimes = 4;

function randomColor() {
	return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

class Circle {
  private _endAngle: number = 2 * Math.PI;
  private _lineThickness: number = 1;

	public drawCircle(startX, startY, radius, iteration){
		ctx.beginPath();
			ctx.strokeStyle = randomColor();
			ctx.arc(startX, startY - radius*0.5, radius/2, 0, 2 * Math.PI);
			ctx.closePath();
			ctx.lineWidth=1;
			ctx.stroke();

			if (iteration < howManyTimes){
				this.drawCircle(startX - radius / 2, startY - radius / 4, radius / 2, iteration + 1);
				this.drawCircle(startX + radius / 2, startY - radius / 4, radius / 2, iteration + 1);
				this.drawCircle(startX, startY + radius / 4, radius / 2, iteration + 1);
				this.drawCircle(startX, startY - radius / 4 * 3, radius / 2, iteration + 1);
			}
	}
}

let fractalCircle = new Circle;
fractalCircle.drawCircle(canvas.width / 2, canvas.height / 4 * 3, canvas.height / 2, 0)
