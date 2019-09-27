// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addN (n: number): number {
    let sum: number = 0;
    if (n > 0){
        sum = n + addN(n - 1);
    }
    return sum;
}

console.log(addN(900));