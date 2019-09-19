'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

let check = {
    averageCandies (array) {
        let sum: number = 0;
        for(let i = 0; i < array.length; i++){
            sum += array[i].candies;
        };
        console.log(`The students have ${sum/array.length} candies on average.`)
    },
    moreThan (array, number) {
        let count: number = 0;
        for(let i = 0; i < array.length; i++){
            if (array[i].candies > number)
                count++;
        };
        console.log(`${count} students have more than ${number} candies.`)
    }
}

check.moreThan(students, 4);
check.averageCandies(students);