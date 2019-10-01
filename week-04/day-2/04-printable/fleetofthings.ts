'use strict'

import { Thing } from './thing';
import { Fleet } from './fleet';
import { Printable } from './printable'

let myFleet = new Fleet();

let getMilk = new Thing ('Get milk');
let remove = new Thing ('Remove the obstacles');
let standUp = new Thing ('Stand up');
let lunch = new Thing ('Eat lunch');
standUp.complete();
lunch.complete();

myFleet.add(getMilk);
myFleet.add(remove);
myFleet.add(standUp);
myFleet.add(lunch);

// console.log(getMilk.getName());
// console.log(fleet.getThings());

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 

class FleetofThings implements Printable {
    private _counter: number = 1;
    private _fleet: any [];
    private _line: any [];

    public main(fleet: Fleet): void {
        this._fleet = [];
        this._line = [];
        for (let i: number = 0; i < fleet.getThings().length; i++){
            this._line.push(`${this._counter}.`);
            if (fleet.getThings()[i].getCompleted() == true) {
                this._line.push('[X]');
            } else {
                this._line.push('[ ]');
            }
            this._line.push(fleet.getThings()[i].getName());
            this._fleet.push(this._line.join(' '));
            this._line = [];
            this._counter += 1;
        }
    }

    public printAllFields(): void {
        console.log(this._fleet.join('\n'));
    }
}

let checkList = new FleetofThings ()
checkList.main(myFleet);

checkList.printAllFields();