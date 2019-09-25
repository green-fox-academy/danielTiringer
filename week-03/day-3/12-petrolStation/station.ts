// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

import { Car } from './car';

export class Station {
    private _gasAmount: number;

    public refill(car: Car): void {
        this._gasAmount -= (car.capacity - car.gasAmount);
        car.gasAmount += (car.capacity - car.gasAmount);
    }
}