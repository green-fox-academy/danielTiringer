'use strict';

let paragraphs = document.querySelectorAll('p');

paragraphs[paragraphs.length - 1].getAttribute('class') == 'dolphin' ? paragraphs[0].innerText = 'pear' : undefined;

paragraphs[0].getAttribute('class') == 'apple' ? paragraphs[2].innerText = 'dog' : undefined;

paragraphs[0].setAttribute('class', paragraphs[0].getAttribute('class') + ' red');

paragraphs[1].style['border-radius'] =  '10%';
