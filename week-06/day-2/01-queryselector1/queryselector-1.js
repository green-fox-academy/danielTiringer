// Task one

let king = document.getElementById('b325');
console.log(king);

// Task two

let businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(element => console.log(element));

// Task three

let conceitedKing = document.querySelectorAll('.b326, #b325');
conceitedKing.forEach(element => alert(element.innerText));

// Task four

let noBusiness = document.querySelectorAll('.b326, #b325, .b329');
noBusiness.forEach(element => console.log(element.innerText));
