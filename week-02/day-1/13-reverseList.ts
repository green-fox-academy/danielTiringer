// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let myArray = [3,4,5,6,7];
let newArray = [];

for(let i = 0 ;i < myArray.length; i++){
    newArray[i] = myArray[myArray.length - i -1];
}
console.log(newArray);