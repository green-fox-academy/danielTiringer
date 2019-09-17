// Create an empty list which will contain names (strings)
let emptyList: string [] = [];
// Print out the number of elements in the list
console.log(emptyList.length);
// Add William to the list
emptyList.push('William');
// Print out whether the list is empty or not
console.log(emptyList.length);
// Add John to the list
emptyList.push('John');
// Add Amanda to the list
emptyList.push('Amanda');
// Print out the number of elements in the list
console.log(emptyList.length);
// Print out the 3rd element
console.log(emptyList[2]);
// Iterate through the list and print out each name
// William
// John
// Amanda
emptyList.forEach(function(name){console.log(name)});
// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda
emptyList.forEach(function(name,index){console.log((index+1) + '. ' + name)});
// Remove the 2nd element
emptyList = emptyList.filter(function(string){
    return(string != 'John');
});
console.log(emptyList);
// Iterate through the list in a reversed order and print out each name
// Amanda
// William
console.log(emptyList.reverse());
// Remove all elements
emptyList.splice(0);
console.log(emptyList);