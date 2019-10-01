'use strict'


import { Animal, LiveBreeder } from './animal';

export class Mammal extends Animal implements LiveBreeder {
    public constructor (name: string) {
        super(name);
    }
    public breed(): string {
        return 'laying pushing miniature versions out.';
    }
}