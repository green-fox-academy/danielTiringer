// Sum Digits
// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// Hint
// Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)

// Java, C++, C#, Python
// Divide (/) by 10 removes the rightmost digit (e.g. 126 / 10 is 12).

// JavaScript, TypeScript
// There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

function sumOfDigits(number: number): number {
    let sum: number = 0;
    if (number > 1){
        sum += number % 10 + sumOfDigits(Math.floor(number / 10));
    }
    return sum;
}

console.log(sumOfDigits(345678));