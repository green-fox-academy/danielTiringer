// Sum
// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empyt list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

'use strict';

import * as test from 'tape';

import { ListOfNumbers } from './sum';

test('Sum A List of Numbers function of the Sum class', t => {
    let regularArray = new ListOfNumbers([0, 1, 2, 3, 4, 5, 6]);
    const actualRegular = regularArray.sumAListOfNumbers(); 
    const expectedRegular = 21;
    t.equal(actualRegular, expectedRegular);

    let oneElementArray = new ListOfNumbers([3]);
    const actualOneElement = oneElementArray.sumAListOfNumbers();
    const expectedOneElement = 3;
    t.equal(actualOneElement, expectedOneElement);

    let emptyArray = new ListOfNumbers();
    console.log(emptyArray);
    const actualEmpty = emptyArray.sumAListOfNumbers()
    const expectedEmpty = 0;
    t.equal(actualEmpty, expectedEmpty);
    
    t.end();
});