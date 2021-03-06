'use strict'

import * as test from 'tape';

import { anagramChecker } from './anagram'

test('Anagram checker function', t => {
    let testOneStringA: string = 'listen';
    let testOneStringB: string = 'siLEnt';
    const actualTestOne = anagramChecker(testOneStringA, testOneStringB); 
    const expectedTestOne = true;
    t.equal(actualTestOne, expectedTestOne, `${testOneStringA} equals ${testOneStringB}`);

    let testTwoStringA: string = 'integral';
    let testTwoStringB: string = 'Triangle';
    const actualTestTwo = anagramChecker(testTwoStringA, testTwoStringB); 
    const expectedTestTwo = true;
    t.equal(actualTestTwo, expectedTestTwo, `${testTwoStringA} equals ${testTwoStringB}`);

    let testThreeStringA: string = 'kitten';
    let testThreeStringB: string = 'hamster';
    const actualTestThree = anagramChecker(testThreeStringA, testThreeStringB); 
    const expectedTestThree = false;
    t.equal(actualTestThree, expectedTestThree, `${testThreeStringA} doesn't equal ${testThreeStringB}`);
    
    t.end();
});