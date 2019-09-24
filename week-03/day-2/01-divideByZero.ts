// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

// Option one, the old school way

function divideTenBy (number: number): any {
    if(number == 0){
        console.log('fail');
    } else {
        console.log(10/number);
    }
}

divideTenBy(0);
divideTenBy(90);

// Option two, with try and catch

function tryAndCatch (number: number): any {
    try {
        if(number === 0){
            throw 'error';
        } else {
            console.log(10 / number)
        }
    } catch(error) {
        console.log('fail');
    }

}

tryAndCatch(0);
tryAndCatch(90);