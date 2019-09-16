// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

'use strict';

let ai:number[] = [3, 4, 5, 6, 7];
const add = (counter, current) => counter + current;
console.log(ai.reduce(add,0));