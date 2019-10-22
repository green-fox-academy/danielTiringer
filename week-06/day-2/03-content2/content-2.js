'use strict';

// Task one

let newItemsList = ['apple', 'banana', 'cat', 'dog'];
let listItems = document.querySelectorAll('li');
console.log(listItems);
newItemsList.forEach(element => {
	listItems[newItemsList.indexOf(element)].innerHTML = element
});

// Task two

let unorderedList = document.querySelector('ul');
unorderedList.setAttribute('class', 'lime')
console.log(unorderedList);
