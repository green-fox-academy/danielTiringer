'use strict';

// We start with a base, abstract class Instrument.

// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.

export class Instrument {
    protected _name: string;

    protected getType(): string {
        return '';
    }

    protected play(): void {
        
    };
}