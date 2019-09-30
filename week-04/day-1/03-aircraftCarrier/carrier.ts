'use strict'

// Aircraft Carrier
// Aircrafts
// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition
// F16
// Max ammo: 8
// Base damage: 30
// F35
// Max ammo: 12
// Base damage: 50
// All aircrafts should be created with an empty ammo storage

import { Aircraft } from './airCraft';
import { F16 } from './f16';
import { F35 } from './f35';

class Carrier {
    private _storedAmmo: number;
    private _healthPoints: number;
    private _aircrafts: Aircraft [];

    constructor (initialAmmo: number, healthPoints: number) {
        this._storedAmmo = initialAmmo;
        this._healthPoints = healthPoints;
        this._aircrafts = [];
    }

    public addAircraft (aircraft: Aircraft): void {
        this._aircrafts.push(aircraft);
    }
    
    public fill (): void {
        try {
            if (this._storedAmmo == 0) {
                throw 'error';
            } else {
                this._aircrafts.forEach(element => {
                    if (this._storedAmmo > 0 && element.getPriority() == true) {
                        this._storedAmmo = element.refill(this._storedAmmo);
                    };
                    if (this._storedAmmo > 0 && element.getPriority() == false) {
                        this._storedAmmo = element.refill(this._storedAmmo);
                    };
                })
            }
        } catch (error) {
            console.log('The carrier has no ammo, no filling is possible!');
        } 
    }

    public getStatus (): void {
        if (this._healthPoints <= 0){
            console.log(`It's dead, Jim :(`);
        } else {
            console.log(`HP ${this._healthPoints}, Ammo Storage: ${this._storedAmmo}, Total Damage: ${this._aircrafts.reduce(function (totalDamage, element) {
                return totalDamage += element.fight()
            }, 0)}`);
            this._aircrafts.forEach(element => element.getStatus());
        }
    }

    public fightAnotherCarrier (anotherCarrier: Carrier): void {
        anotherCarrier._healthPoints -= this._aircrafts.reduce(function (totalDamage, element) {
            return totalDamage += element.fight()
        }, 0)
        this._aircrafts.forEach(element => element.useAmmo());
        this.getStatus();
    }
}

let missouri = new Carrier (2300, 5000);

let iceMan = new F35 ();
let coolerOne = new F35 ();
let americanEagle = new F35
let maverick = new F16 ();
let goose = new F16 ();

missouri.addAircraft(iceMan);
missouri.addAircraft(coolerOne);
missouri.addAircraft(americanEagle);
missouri.addAircraft(maverick);
missouri.addAircraft(goose);

missouri.fill();

missouri.getStatus();


let konovalov = new Carrier (2600, 1600);

missouri.fightAnotherCarrier(konovalov);

konovalov.getStatus();

// Carrier
// Create a class that represents an aircraft-carrier

// The carrier should be able to store aircrafts
// Each carrier should have a store of ammo represented as number
// The initial ammo should be given by a parameter in its constructor
// The carrier also has a health point given in its constructor as well
// Methods
// add
// It should take a new aircraft and add it to its storage
// fill
// It should fill all the aircraft with ammo and subtract the needed ammo from the ammo storage
// If there is not enough ammo then it should start to fill the aircrafts with priority first
// If there is no ammo when this method is called, it should throw an exception
// fight
// It should take another carrier as a reference parameter and fire all the ammo from the aircrafts to it, then subtract all the damage from its health points
// getStatus
// It should return a string about itself and all of its aircrafts' statuses in the following format:

// HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
// Aircrafts:
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// If the health points are 0 then it should return: It's dead Jim :(