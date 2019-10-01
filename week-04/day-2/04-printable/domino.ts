'use strict'

import { Printable } from './printableInterface';

class Domino implements Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
    public get value() {
        return this.values;
    }
    public get valueB() {
        return this.valueB;
    }
    public printAllFields(): void {
        console.log(this.values);
    }
}

export {Domino};