import { Pirate } from './pirate'

export class Ship {
    private _crew: Pirate [];
    private _captain: Pirate;

    public fillShip (): void {
        this._crew = [];
        this._captain = new Pirate;
        for (let i: number = 0; i < Math.floor(Math.random()*10)+1; i++){
            this._crew.push(new Pirate);
        }
    }

    public headCount (): void {
        console.log('Admirrrrrral, the wretches on the ship are:');
        console.log(`The capitan had ${this._captain.rumConsumed} rums, ${this._captain.ifDead} dead and ${this._captain.ifPassedOut} passed out, and ${this._captain.hasParrot} a parrot. The headcount is ${this._crew.length + 1}!`);
    }

    public changeCaptain (string: string) {
        if (string == 'rum') {
            this._captain.drinkSomeRum();
        } else if (string == 'parrot') {
            this._captain.addParrot();
        }
    }
}






// Variables and callbacks to test the established functions.

let rumVessel = new Ship;

rumVessel.fillShip();

rumVessel.changeCaptain('rum');
rumVessel.changeCaptain('rum');
rumVessel.changeCaptain('parrot');
rumVessel.changeCaptain('rum');

rumVessel.headCount();

// The Pirate Ship
// The place for the Pirates

// Create a Ship class.
// The Ship stores Pirate-s instances in a list as the crew and has one captain who is also a Pirate.
// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
// Filling the ship with a captain and random number of pirates.
// Ships should be represented in a nice way on command line including information about
// captains consumed rum, state (passed out / died)
// number of alive pirates in the crew
// Ships should have a method to battle other ships: ship.battle(otherShip)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winner captain and crew has a party, including a random number of rum :)
// BattleApp
// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!