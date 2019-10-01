'use strict'

import { Animal } from './animal';
import { EggLayer } from './animal'

export class Bird extends Animal implements EggLayer {
    public constructor (name: string) {
        super(name);
    }
    public breed(): string {
        return 'laying eggs.';
    }
}