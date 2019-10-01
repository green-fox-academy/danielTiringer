'use strict'

import { Animal } from './animal';

export class Reptile extends Animal {
    public constructor (name: string) {
        super(name);
    }
    public breed(): string {
        return 'laying eggs.';
    }
}