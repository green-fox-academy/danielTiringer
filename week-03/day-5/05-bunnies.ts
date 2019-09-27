// Bunnies
// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEars (bunnies: number): number {
    let ears: number = 0;
    if (bunnies >= 1){
        ears += 2 + bunnyEars(bunnies - 1);
    }
    return ears;
}

console.log(bunnyEars(80));