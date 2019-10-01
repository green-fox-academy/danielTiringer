'use strict'

import { StringedInstrument } from './stringedInstrument';

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