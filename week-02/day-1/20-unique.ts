//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let output:number[] = [];

function unique(arr) {
    let sorted: number[] = arr.sort();
    for (let i = 0; i < arr.length; i++){
        if (sorted[i] != sorted[i+1]){
            output.push(sorted[i]);
        };
    };
    return output;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]
