// Not needed at this time, but if later on there's a function that requires it, it's already here.
// import { Station } from './station'; 

export class Car {
    private _gasAmount: number;
    private _capacity: number;

    public constructor () {
        this._gasAmount = 0;
        this._capacity = 100;
    }

    public get gasAmount () {
        return this._gasAmount;
    }

    public get capacity () {
        return this._capacity;
    }

    public set gasAmount (gasAmount) {
        this._gasAmount += gasAmount;
    }
}