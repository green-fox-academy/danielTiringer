// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTenBy (number: number): any {
    if(number == 0){
        console.log('fail');
    } else {
        console.log(10/number);
    }
}

divideTenBy(0);
divideTenBy(90);