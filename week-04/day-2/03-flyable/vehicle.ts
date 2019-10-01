'use strict'

// Flyable
// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface

export abstract class Vehicle {
    protected _type: string;
    protected _fuelType: string;
    protected _propulsion: string;

    constructor (type: string, fuelType: string, propulsion: string) {
        this._type = type;
        this._fuelType = fuelType;
        this._propulsion = propulsion;
    }
}