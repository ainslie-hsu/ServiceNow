// Find the largest value in an array of ints (e.g. [3, 5, 1, 44, 2, 6, 99])

// ES5 SOLUTION:

var findLargestValue = function(intArr) {
  intArr.sort(function(a, b) {
    return b - a;
  });

  return intArr[0];
}

// ES6 SOLUTION (with spread operator):

// let findLargestValue = function(intArr) {
//   return Math.max(...intArr);
// };

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

var actual = findLargestValue([3, 5, 1, 44, 2, 6, 99]);
var expected = 99;

assertEqual(actual, expected, 'findLargestValue');

var actual = findLargestValue([0, -10, 100, 2, 40, 66]);
var expected = 100;

assertEqual(actual, expected, 'findLargestValue');
