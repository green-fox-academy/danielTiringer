import { Thing } from './thing';
import { Fleet } from './fleet';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

let fleet = new Fleet();

let getMilk = new Thing ('Get milk');
let remove = new Thing ('Remove the obstacles');
let standUp = new Thing ('Stand up');
let lunch = new Thing ('Eat lunch');
standUp.complete();
lunch.complete();

fleet.add(getMilk);
fleet.add(remove);
fleet.add(standUp);
fleet.add(lunch);

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
console.log(Object.values(fleet.getThings()));
console.log(Object.keys(fleet.getThings()));

for(let i: number = 0; i < 4; i++){

}



class FleetofThings {
    private _counter: number = 1;
    private _complete: boolean;
    private fleet: any [];
    

    public main(fleet: Fleet) {
        this.fleet = [];
        for (let thing in fleet){
            this.fleet.push(this._counter);
            this.fleet.push(thing.valueOf[0]);
            this.fleet.push('\n');
            this._counter += 1;
        }
        console.log(this.fleet);
    }

    // public print() {
    //     console.log(`${FleetofThings._counter}`)

    //     
    // }
}

let checkList = new FleetofThings ()
checkList.main(fleet);