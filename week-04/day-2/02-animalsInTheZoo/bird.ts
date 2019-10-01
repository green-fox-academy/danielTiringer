'use strict'

import { Animal } from './animal';
import { EggLayer } from './animal'
import { Flyable } from '../03-flyable/flyable';

export class Bird extends Animal implements EggLayer, Flyable {
    public constructor (name: string) {
        super(name);
    }
    public breed(): string {
        return 'laying eggs.';
    }
    public land(): void {
        console.log('The bird lands on the tree.')
    }
    public takeOff(): void {
        console.log('The bird pushes off the branch and takes flight!')
    }
    public fly(): void{
        console.log('The bird flies high in the sky!')
    }
}