// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

/* Initial solution - not flexible
function printParams(a, b, c, d, e, f) {
    console.log(`The input parameters are: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}.`);
};

printParams(1,2,3,4,5,6);

*/

// Flexible, takes an array (n amount of variables)

let array:number[] = [1, 2, 3, 4, 5, 6, 7, 8]

function printParams(arguments:number[]) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};

printParams(array);