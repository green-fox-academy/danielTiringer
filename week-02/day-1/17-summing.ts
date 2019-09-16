// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let givenParameter: number = 16;

function sum(input: number) {
    let output: number = 0;
    for(let i = 0; i <= input; i++){
        output += i;
    }
    return output;
}

console.log(sum(givenParameter));