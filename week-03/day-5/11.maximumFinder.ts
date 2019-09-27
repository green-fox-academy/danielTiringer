// Maximum finder
// Write a function that finds the largest element of an array using recursion.
let myArray: number [] = [1, 5, 9, 5, 3, 4, 10, 5, 3, 2, 7]
let largest: number;

function findTheLargest (array: number [], index: number): number {
    if (!largest){
        largest = array[0];
    }
    if (index < array.length){
        if(array[index] > largest){
            largest = array[index];
        }
        findTheLargest(array, index + 1);
    }
    return largest;
}

console.log(findTheLargest(myArray, 0));