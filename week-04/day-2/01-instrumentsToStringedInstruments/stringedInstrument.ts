'use strict'

// Model stringed instruments

// Next, we add another abstract class, StringedInstrument which extends Instrument. It introduces numberOfStrings and sound() method what's implementation is yet unknown but with the help of the sound() the play() method is fully implementable

import { Instrument } from './instrument';

export class StringedInstrument extends Instrument {
    protected _numberOfStrings: number;

    protected sound(): string {
        return '';
    };

    public play(): void {
        console.log(`${this.getType()}, a ${this._numberOfStrings} stringed instrument that goes ${this.sound()}`);
    }

    constuctor(numberOfStrings: number, name: string): any {
        this._numberOfStrings = numberOfStrings;
        this._name = name;
    }
}

export class ElectricGuitar extends StringedInstrument {
    constructor(numberOfStrings? : number) {
        super ()
        this._numberOfStrings = (numberOfStrings ? numberOfStrings : 6)
    }

    public getType(): string {
        return 'Electric Guitar'
    }

    protected sound(): string {
        return 'Twang';
    }
}

export class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings? : number) {
        super ()
        this._numberOfStrings = (numberOfStrings ? numberOfStrings : 4)
    }

    public getType(): string {
        return 'Bass Guitar'
    }

    protected sound(): string {
        return 'Duum-duum-duum';
    }
}

export class Violin extends StringedInstrument {
    constructor(numberOfStrings? : number) {
        super ()
        this._numberOfStrings = (numberOfStrings ? numberOfStrings : 4)
    }

    public getType(): string {
        return 'Violin'
    }

    protected sound(): string {
        return 'Screech';
    }
}

// StingedInstrument has 3 descendants, namely:

// Electric Guitar (6 strings, 'Twang')
// Bass Guitar (4 strings, 'Duum-duum-duum')
// Violin (4 strings, 'Screech')
// The Workshop should be invoked from another file like app.ts or main.ts