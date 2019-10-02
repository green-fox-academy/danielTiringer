'use strict'

export class Animal {
    private _hunger: number;
    private _thirst: number;
    
    constructor () {
        this._hunger = 50;
        this._thirst = 50;
    }

    public eat(): void {
        this._hunger -= 1;
    }

    public drink(): void {
        this._thirst -= 1;
    }

    public play(): void {
        this._hunger += 1;
        this._thirst += 1;
    }
    public getHunger(): number {
        return this._hunger;
    }

    public getThirst(): number {
        return this._thirst
    }
}