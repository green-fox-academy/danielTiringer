'use strict'

import * as test from 'tape';

import { countLetters } from './countLetters';

test('Letter counter function', t => {
    let testOneString: string = 'tiny kitten';
    const actualTestOne = countLetters(testOneString); 
    const expectedTestOne = {t: 3, i: 2, n: 2, y: 1, k: 1, e: 1};
    t.equal(JSON.stringify(actualTestOne), JSON.stringify(expectedTestOne), 'The letters and count matches the test scenario, as expected.');

    let testTwoString: string = 'spaceghost';
    const actualTestTwo = countLetters(testTwoString); 
    const expectedTestTwo = {s: 2, h: 4, j:1, e: 2, a: 2};
    t.notEqual(JSON.stringify(actualTestTwo), JSON.stringify(expectedTestTwo), 'The letters and count do not match the test scenario, as expected.');

    t.end();
});