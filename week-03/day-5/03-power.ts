// Power
// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerCalculator (base: number, power: number): number {
    if (power > 1){
        base *= powerCalculator(base, power - 1);
    }
    return base;
}

console.log(powerCalculator(2, 8));