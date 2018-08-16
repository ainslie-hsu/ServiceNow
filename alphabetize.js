// Alphabetize an array of strings (e.g. [‘dog’, ‘cat’, ‘fish’, ‘bird’])

// SOLUTION:

var alphabetize = function(strArr) {
  return strArr.sort(function(a, b) {
    return a.localeCompare(b);
  });
};

// TESTS:

var assertEqual = function(actual, expected, testName) {
  var actual = JSON.stringify(actual);
  var expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
      console.log('FAILED [' + testName + '] expected: ' + expected + '; but got: ' + actual);
  }
}

var actual = alphabetize(['dog', 'cat', 'fish', 'bird']);
var expected = (['bird', 'cat', 'dog', 'fish']);

assertEqual(actual, expected, 'Alphabetize');

var actual = alphabetize(['carrot', 'apple', 'banana']);
var expected = (['apple', 'banana', 'carrot']);

assertEqual(actual, expected, 'Alphabetize');
