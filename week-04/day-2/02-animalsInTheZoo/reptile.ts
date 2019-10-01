'use strict'

import { Animal, EggLayer } from './animal';

export class Reptile extends Animal implements EggLayer {
    public constructor (name: string) {
        super(name);
    }
    public breed(): string {
        return 'laying eggs.';
    }
}