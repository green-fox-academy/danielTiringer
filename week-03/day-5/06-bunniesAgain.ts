// Bunnies again
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEarsAgain (bunnies: number): number {
    let ears: number = 0;
    if (bunnies >= 1){
        if (bunnies % 2 == 0){
            ears += 3 + bunnyEarsAgain(bunnies -1);
        } else if (bunnies % 2 != 0){
            ears += 2 + bunnyEarsAgain(bunnies - 1);
        }
    }
    return ears;
}

console.log(bunnyEarsAgain(70));