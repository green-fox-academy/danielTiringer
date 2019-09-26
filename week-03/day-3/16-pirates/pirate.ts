export class Pirate {
    private _rumConsumed: number;
    private _isPassedOut: boolean;
    private _isDead: boolean;
    private _hasParrot: boolean;

    constructor() {
        this._rumConsumed = 0;
        this._isDead = false;
        this._isPassedOut = false;
        this._hasParrot = false;
    }

    public get rumConsumed(): number {
        return this._rumConsumed;
    }

    public get ifDead(): string {
        if (this._isDead == true) {
            return 'is';
        } else {
            return 'is not';
        }
    }

    public get ifPassedOut(): string {
        if (this._isPassedOut == true) {
            return 'is';
        } else {
            return 'is not';
        }
    }

    public get hasParrot(): string {
        if (this._hasParrot == true) {
            return 'does have';
        } else {
            return 'does not have';
        }
    }

    public drinkSomeRum(): void {
        if (this._isDead == true) {
            console.log('The pirate is dead.')
        } else {
            this._rumConsumed += 1;
        }
    }

    public howsItGoingMate(): void {
        if (this._isDead == true){
            console.log('The pirate is dead.')
        } else if (this._isPassedOut == true) {
            this._isPassedOut = false;
            this._rumConsumed = 0;
            console.log('Slept off ye ale, time methinks another!');
        } else if (this._rumConsumed <= 4 && this._isDead == false) {
            console.log('Pour me anudder!');
        } else if (this._rumConsumed > 4 && this._isDead == false) {
            console.log("Arghh, I'ma pirate. How d'ya d'ink its goin?");
            this._isPassedOut = true;
            console.log('/ The pirate passes out and sleeps it off /');
        }
    }

    public die(): void {
        this._isDead = true;
        this._isPassedOut = false;
    }

    public brawl (otherPirate: Pirate): void {
        let chance: number = Math.floor(Math.random()*3);
        console.log(`Two pirates started a brawl!`);
        if (chance == 0){
            this._isPassedOut = true;
            otherPirate._isPassedOut = true;
            console.log('Both pirates were worn out in the fight and passed out.')
        } else if (chance == 1) {
            this._isDead = true;
            this._isPassedOut = false;
            console.log(`The first pirate won the fight!`);
        } else if (chance == 2) {
            otherPirate.die();
            otherPirate._isPassedOut = false;
            console.log(`The second pirate won the fight!`)
        }
    }

    public addParrot (): void {
        if(this._hasParrot == false){
            this._hasParrot = true;
        }
    }
}

/*
The stuff below was used to test out the various functions written for the pirates.

let scallyWag = new Pirate;
let scoundrel = new Pirate;
let snytch = new Pirate;

scallyWag.drinkSomeRum();
scallyWag.drinkSomeRum();
scallyWag.howsItGoingMate();
scallyWag.drinkSomeRum();
scallyWag.drinkSomeRum();
scallyWag.drinkSomeRum();
scallyWag.howsItGoingMate();
scallyWag.howsItGoingMate();
scallyWag.howsItGoingMate();

scoundrel.brawl(snytch);

*/
// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

// And... if you get that far...

// Add a parrot.