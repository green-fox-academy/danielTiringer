// Animal
// Search back in your own project directory the Animal class you made on the OO workshop
// Create tests for multiple test cases.

'use strict'

import * as test from 'tape';
import { Animal } from './animal';

test ('Testing the functions of the animal class', t => {
    let bessie = new Animal ();
    t.equal(bessie.getHunger(), 50, 'The animal\'s default hunger is indeed 50');
    t.equal(bessie.getThirst(), 50, 'The animal\'s default thirst is indeed 50');

    bessie.play();
    t.equal(bessie.getHunger(), 51, 'When playing, the animal\'s hunger grows by one.');
    t.equal(bessie.getThirst(), 51, 'When playing, the animal\'s thirst grows by one.');

    bessie.eat();
    t.equal(bessie.getHunger(), 50, 'The animal\'s eat function lowers the hunger by one.');

    bessie.drink();
    t.equal(bessie.getThirst(), 50, 'The animal\'s drink function lowers the thirst by one.');

    t.end()
})