// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrixSize = 4;
let matrix:number[] = [];

for (let i = 0; i < matrixSize; i++){
    for (let j = 0; j < matrixSize; j++){
        if (i == matrixSize - j -1){
            matrix.push(1);
        } else {
            matrix.push(0);
        };
    };
    console.log(matrix.join(' '));
    matrix = [];
};
