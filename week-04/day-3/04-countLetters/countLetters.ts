// Count Letters
// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

'use strict'

// Unable to add a type to the string argument in the countLetter function as it would break the function inside the string.replace.

export function countLetters (string): any {
    let charCounterObject: any = {};

    string.replace(/\S/g, function(l){charCounterObject[l] = (isNaN(charCounterObject[l]) ? 1 : charCounterObject[l] + 1);});
    return charCounterObject;
}
