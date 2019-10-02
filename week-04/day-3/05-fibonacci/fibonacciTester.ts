// Fibonacci
// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.

'use strict'

import * as test from 'tape';

import { fibonacci } from './fibonacci';

test('Letter counter function', t => {
    const actualTestOne = fibonacci(15); 
    const expectedTestOne = 610;
    t.equal(actualTestOne, expectedTestOne, 'The results calculated by the Fibonacci function matches the expected result.');

    const actualTestTwo = fibonacci(3); 
    const expectedTestTwo = 3;
    t.notEqual(actualTestTwo, expectedTestTwo, 'The results calculated by the Fibonacci function does not match the expected result.');

    const actualTestThree = fibonacci(19); 
    const expectedTestThree = 4181;
    t.equal(actualTestThree, expectedTestThree, 'The results calculated by the Fibonacci function matches the expected result.');

    t.end();
});