'use strict'

export class Sharpie {
    private _color: string;
    private _width: number;
    private _inkAmount: number;
    
    constructor (color: string, width: number) {
        this._color = color;
        this._width = width;
        this._inkAmount = 100;
    }

    public use(): void {
        this._inkAmount -= 1;
    }

    public getInkAmount(): number {
        return this._inkAmount;
    }

    public getcolor(): string {
        return this._color;
    }

    public getWidth(): number {
        return this._width;
    }
}