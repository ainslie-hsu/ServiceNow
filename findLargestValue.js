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
