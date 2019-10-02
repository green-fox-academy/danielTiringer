// Strings again and again
// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

'use strict'

let myString: string = 'The black cat climbed on the roof.';

let stringArray: string[] = [];

for (let i: number = 0; i < myString.split('').length; i++){
	stringArray.push(myString.split('')[i]);
   if(myString.split('')[i+1] != ' ' && myString.split('')[i] != ' ' && myString.split('')[i] != '.' && myString.split('')[i+1] != '.'){
	stringArray.push('*');
   }

}
console.log(stringArray.join(''));








































