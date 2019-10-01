'use strict'


import { Animal } from './animal';

export class Mammal extends Animal {
    public constructor (name: string) {
        super(name);
    }
    public breed(): string {
        return 'laying pushing miniature versions out.';
    }
}