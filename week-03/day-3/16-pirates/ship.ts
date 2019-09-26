import { Pirate } from './pirate'

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

export class Ship {
    private _crew: Pirate [];
    private _captain: Pirate;

    public fillShip (): void {
        this._crew = [];
        this._captain = new Pirate;
        for (let i: number = 0; i < Math.floor(Math.random()*10)+5; i++){
            this._crew.push(new Pirate);
        }
    }

    public headCount (): number {
        return this._crew.length + 1;
    }

    public headCountReport (): void {
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

    // To commemorate battle victories!
    public party (): void {
        for(let i: number = 0; i < Math.floor(Math.random()*5 + 1); i++){
            this._captain.drinkSomeRum();
        }
    }

    public battle (otherShip: Ship): void {
        console.log('A pirate ship attacked another! Drink a grog and defend yerselves, ye filthy bassterds!');
        // Calculating battle scores for the attacking ship (this ship)
        let attacker: number = 0;
        attacker += this._crew.length;
        attacker += 1;
        // Everyone knows that having a parrot gives you an edge in the fight!
        if (this._captain.hasParrot){
            attacker += 3;
        }
        // Drunk captains make bad decisions
        attacker -= this._captain.rumConsumed;
        // Call it luck, chance or fate, battles are not just about numbers
        attacker += (Math.floor(Math.random()*6));
        // console.log(attacker);

        // Calculating battle scores for the defending ship (otherShip)
        let defender: number = 0;
        defender += otherShip._crew.length;
        defender += 1;
        if (otherShip._captain.hasParrot){
            defender += 3;
        }
        defender -= otherShip._captain.rumConsumed;
        defender += (Math.floor(Math.random()*6));
        // console.log(defender);

        if (attacker >= defender){
            this._crew.splice(0, Math.floor(Math.random()*this._crew.length + 1));
            console.log('The attacking pirate ship won!');
            this.party();
            this.headCountReport();
        } else if (attacker < defender){
            otherShip._crew.splice(0, Math.floor(Math.random()*otherShip._crew.length + 1));
            console.log('The defending pirate ship won!');
            otherShip.party();
            otherShip.headCountReport();
        }
    }
}

// Variables and callbacks to test the established functions.

// let rumVessel = new Ship;

// rumVessel.fillShip();

// rumVessel.changeCaptain('rum');
// rumVessel.changeCaptain('rum');
// rumVessel.changeCaptain('parrot');
// rumVessel.changeCaptain('rum');

// rumVessel.headCountReport();

// let blackPearl = new Ship;

// blackPearl.fillShip();

// blackPearl.headCountReport();

// rumVessel.battle(blackPearl);