'use strict'

export function fibonacci(number: number): number {
    let calculatedFibonacci: number = 0;
    if(number == 0){
        calculatedFibonacci = 0;
    } else if (number == 1){
        calculatedFibonacci = 1
    } else if (number > 1){
        calculatedFibonacci = fibonacci (number - 1) + fibonacci (number - 2)
    }
    return calculatedFibonacci;
}

console.log(fibonacci(15))