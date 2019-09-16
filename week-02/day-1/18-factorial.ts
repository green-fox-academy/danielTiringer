// -  Create a function called `factorio`
//    that returns it's input's factorial

let number: number = 16;

function factorio(input: number) {
    let output: number = 1;
    for(let i = 1; i <= input; i++){
        output = output * i;
    }
    return output;
}

console.log(factorio(number));