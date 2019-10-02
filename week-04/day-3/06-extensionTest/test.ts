// Check out the folder. There's a work file and a test file.

//  -  Run the tests, all 10 should be green (passing).
//  -  The implementations though are not quite good.
//  -  Create tests that'll fail, and will show how the implementations are wrong(You can assume that the implementation of join and split are good)
//  -  After creating the tests, fix the implementations
//  -  Check again, if you can create failing tests
//  -  Implement if needed

'use strict';

import * as test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

// 1
test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

// 2
test('add: 1 and 4 is 5', function (t: any): any {
  t.notEqual(add(1, 4), 9);
  t.end();
});

// 3
test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

// 4
test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

// 5
test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

// 6
test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

// 7
test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

// 8
test('is vowel: u', function (t: any): any {
  t.ok(isVowel('U'));
  t.end();
});

// 9
test('is vowel: k', function(t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

// 10
test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

// 11
test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});

test('translate: sanyi', function (t: any): any {
  t.equal(translate('sanyi'), 'savanyivi');
  t.end();
});