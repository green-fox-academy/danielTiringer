'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let howManyTimes = 4;

class Square {

    public drawSquare (startX: number, startY: number, widthAndHeight: number) {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(startX, startY, widthAndHeight, widthAndHeight);
    }
}

class Carpet {
    private _startX: number;
    private _startY: number;
    private _widthAndHeight: number; 

    public innerSquare (startX: number, startY: number, widthAndHeight: number): void {
        // To draw the inner, large square
        let insideSquare = new Square;
        insideSquare.drawSquare (startX + canvas.height / 3, startY + canvas.height / 3, widthAndHeight)
    }
    public outerSquares (startX: number, startY: number, widthAndHeight: number, repeater: number): void {
        this._widthAndHeight = widthAndHeight / 3
        let topLeftSquare = new Square;
        topLeftSquare.drawSquare (startX + this._widthAndHeight, startY + this._widthAndHeight, this._widthAndHeight);
        let topSquare = new Square;
        topSquare.drawSquare (startX + this._widthAndHeight * 4, startY + this._widthAndHeight, this._widthAndHeight);
        let topRightSquare = new Square;
        topRightSquare.drawSquare (startX + this._widthAndHeight * 7, startY + this._widthAndHeight, this._widthAndHeight);
        let leftSquare = new Square;
        leftSquare.drawSquare (startX + this._widthAndHeight, startY + this._widthAndHeight * 4, this._widthAndHeight);
        let rightSquare = new Square;
        rightSquare.drawSquare (startX + this._widthAndHeight * 7, startY + this._widthAndHeight * 4, this._widthAndHeight);
        let bottomLeftSquare = new Square;
        bottomLeftSquare.drawSquare (startX + this._widthAndHeight, startY + this._widthAndHeight * 7, this._widthAndHeight);
        let bottomSquare = new Square;
        bottomSquare.drawSquare (startX + this._widthAndHeight * 4, startY + this._widthAndHeight * 7, this._widthAndHeight);
        let bottomRightSquare = new Square;
        bottomRightSquare.drawSquare (startX + this._widthAndHeight * 7, startY + this._widthAndHeight * 7, this._widthAndHeight);

        if (repeater < howManyTimes) {
            // Top left repeater
            this.outerSquares(startX, startY, widthAndHeight / 3, repeater + 1);
            // Top repeater
            this.outerSquares(startX + widthAndHeight, startY, widthAndHeight / 3, repeater + 1);
            // Top right repeater
            this.outerSquares(startX + widthAndHeight * 2, startY, widthAndHeight / 3, repeater + 1);
            // Left repeater
            this.outerSquares(startX, startY + widthAndHeight, widthAndHeight / 3, repeater + 1);
            // Right repeater
            this.outerSquares(startX + widthAndHeight * 2, startY + widthAndHeight, widthAndHeight / 3, repeater + 1);
            // Bottom left repeater
            this.outerSquares(startX, startY + widthAndHeight * 2, widthAndHeight / 3, repeater + 1);
            // Bottom repeater
            this.outerSquares(startX + widthAndHeight, startY + widthAndHeight * 2, widthAndHeight / 3, repeater + 1);
            // Bottom right repeater
            this.outerSquares(startX + widthAndHeight * 2, startY + widthAndHeight * 2, widthAndHeight / 3, repeater + 1);
        }
    }
}

let carpet = new Carpet
carpet.innerSquare(0, 0, canvas.height / 3);
carpet.outerSquares(0, 0, canvas.height / 3, 0);