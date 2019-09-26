import { Pirate } from './pirate';
import { Ship } from './ship';

// Armada
// Create an Armada class
// Contains Ship-s as a list
// Have a armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets skipped so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner
// WarApp
// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!

class Armada {
    private _ships: Ship [];
    private _numberOfPirates: number;

    public fillArmada (): void {
        let ship = new Ship;
        this._ships = [];
        for (let i: number = 0; i < (Math.floor(Math.random()*10)+5); i++){
            ship.fillShip()
            this._ships.push(ship);
        }
        console.log(this._ships.length)
    };
    
    public armadaCount (): void {
        for (let i: number = 0; i < this._ships.length; i++){
            // console.log(this._ships[i].headCount());
        }
        console.log(`Admirrrrrral, our fleet of rum-drinkers is ${this._ships.length} strong! Affter arr bellies arr full of cabbage and rumm, these bassterds arr hungrrry for warrrrr!`);
    }
}







let jackSparrow = new Armada;
jackSparrow.fillArmada();
console.log(jackSparrow);
jackSparrow.armadaCount();

let blackBeard = new Armada;
blackBeard.fillArmada;