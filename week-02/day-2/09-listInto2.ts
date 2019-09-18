// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
let listA: string [] = ["Apple", 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
// Create a new list ('List B') with the values of List A
let listB: string [] = [...listA];
// Print out whether List A contains Durian or not
if (listA.indexOf('Durian') > 0){
    console.log('List A contains Durian');
}
// Remove Durian from List B
listB = listB.filter(function(string){
    if(string != 'Durian'){
        return string;
    }
});
// Add Kiwifruit to List A after the 4th element
let temp: string [] = listA.slice (4);
listA = listA.slice(0,4);
listA.push('Kiwifruit');
listA = listA.concat(temp);
console.log(listA);
// Compare the size of List A and List B
if(listA.length > listB.length){
    console.log('List A is longer')
} else if (listA.length < listB.length){
    console.log('List B is longer')
} else if (listA.length == listB.length){
    console.log('List A and List B are equally long')
}
// Get the index of Avocado from List A
console.log('The index of avocado is: ' + listA.indexOf('Avocado'));
// Get the index of Durian from List B
console.log(listB.indexOf('Durian'));
// Add Passion Fruit and Pomelo to List B in a single statement
listB.push('Passion Fruit', 'Pomelo');
// Print out the 3rd element from List A
console.log(listA[2]);