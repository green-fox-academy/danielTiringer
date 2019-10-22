'use strict'

// Task one

let paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(element => element.innerText = paragraphs[paragraphs.length - 1].innerText);

// Task two

paragraphs.forEach(element => element.innerHTML = paragraphs[paragraphs.length - 1].innerHTML);
