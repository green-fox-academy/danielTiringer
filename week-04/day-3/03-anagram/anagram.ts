// Anagram
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

'use strict'

export function anagramChecker(stringOne: string, stringTwo: string) {
    function makeStringRegular (string: string) {
        return string.toLowerCase().split('').sort().join('').trim();
    };
    
    if (makeStringRegular(stringOne) === makeStringRegular(stringTwo)) {
        return true;
    } else {
        return false;
    }
}


