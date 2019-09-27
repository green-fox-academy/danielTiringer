// Greatest Common Divisor
// Find the greatest common divisor of two numbers using recursion.

function greatestCommonDivisor (numberA, numberB) {
    if (!numberB) {
        return numberA;
    }
    return greatestCommonDivisor(numberB, numberA % numberB);
}

console.log(greatestCommonDivisor(99, 3988));