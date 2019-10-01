'use strict'

import { StringedInstrument } from './stringedInstrument';

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