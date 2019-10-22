'use strict';

let imageURL = document.querySelector('img');
console.log(imageURL.src);
imageURL.src = 'http://3.bp.blogspot.com/-9sx7JjIElME/UtmRCH7h3nI/AAAAAAAAA34/mp20eXYZRbI/s1600/Wombats-Facts-Photos.png';

let link = document.querySelector('a');
link.href = 'https://greenfoxacademy.com';

let secondButton = document.querySelector('.this-one');
secondButton.disabled = true;
secondButton.innerText = 'Don\'t click me!';
