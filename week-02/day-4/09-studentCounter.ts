'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

let check = {
    allCandies (array) {
        let sum: number = 0;
        for(let i = 0; i < array.length; i++){
            sum += array[i].candies;
        };
        console.log(`The students have ${sum} candies altogether.`)
    },
    lessThan (array, number) {
        let count: number = 0;
        for(let i = 0; i < array.length; i++){
            if (array[i].candies < number)
                count++;
        };
        console.log(`${count} students have less than ${number} candies.`)
    }
}

check.allCandies(students);
check.lessThan(students, 5);

// howMany(array1, name1, array2, name2){
//     let counter1: number = 0;
//     let counter2: number = 0;
//     for(let i = 0; i < Object.keys(array1).length; i++){
//         counter1 += array1[Object.keys(array1)[i]];
//     };
//     for(let j = 0; j < Object.keys(array2).length; j++){
//         counter2 += array2[Object.keys(array2)[j]];
//     };
//     if(counter1 > counter2){
//         console.log(`${name1} buys more pieces.`);
//     } else if (counter2 > counter1){
//         console.log(`${name2} buys more pieces.`);
//     } else if (counter1 == counter2){
//         console.log(`${name1} and ${name2} are buying the same amount of pieces.`);
//     }
// },