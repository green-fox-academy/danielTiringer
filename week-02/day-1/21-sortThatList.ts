//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

let sorted: number[] = [];

function bubble(array) {
    array = array.sort((a, b) => a - b);
    return array;
};

function advancedBubble(array, check) {
    if (check === true) {
        array = array.sort((a, b) => b - a);
        return array;
    } else {
        return array;
    }
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]