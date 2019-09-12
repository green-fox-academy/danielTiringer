'use strict';

/* BMI

According to cdc.gov (https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_1.html), the calculation goes as follows:
Formula: weight (kg) / [height (m)]2

*/

let massInKg: number = 81.2;
let heightInM: number = 1.78;

let BMI: number = (massInKg / heightInM**2);

console.log(BMI);