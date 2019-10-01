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

import { Flyable } from './flyable';
import { Vehicle } from './vehicle';

export class Helicopter extends Vehicle implements Flyable {
    fly(): void {
        console.log(`The ${this._type} burns ${this._fuelType} while flying!`)
    }
    land(): void {
        console.log(`The ${this._type} lands to fill up with ${this._fuelType}.`)
    }
    takeOff(): void {
        console.log(`The ${this._type} spins up its ${this._propulsion} and takes off!`)
    }
    constructor(type: string, fuelType: string, propulsion: string) {
        super(type, fuelType, propulsion);
    }
}