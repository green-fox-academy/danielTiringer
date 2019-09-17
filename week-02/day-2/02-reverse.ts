'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
let newString: string = '';

function reverse (string) {
    for (let i = 0; i < string.length; i++){
        newString += string.charAt(string.length - i -1);
    }
    return newString;
}

console.log(reverse(reversed));

export = reverse;