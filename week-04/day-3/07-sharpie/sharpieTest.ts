// Sharpie
// Search back in your own project the Sharpie class you made on the OO workshop
// Create tests that covers all types of input (like in the previous workshop exercise)

import * as test from 'tape';
import { Sharpie } from './sharpie';

test ('Testing sharpies', t => {
    let greenSharpie = new Sharpie ('green', 23);
    t.equal(greenSharpie.getInkAmount(), 100, 'The sharpie\'s default ink quantity is indeed 100');

    greenSharpie.use();
    t.equal(greenSharpie.getInkAmount(), 99, 'When used, the sharpie uses one unit of ink at the time');

    t.notEqual(greenSharpie.getcolor(), 'blue', 'The sharpie\'s color is correctly read');

    t.equal(greenSharpie.getWidth(), 23, 'The sharpie\'s width matches the number');

    t.end()
})