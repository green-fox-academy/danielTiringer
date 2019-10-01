'use strict'

import { StringedInstrument } from './stringedInstrument';

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