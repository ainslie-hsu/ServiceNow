// Alphabetize an array of strings (e.g. [‘dog’, ‘cat’, ‘fish’, ‘bird’])

// SOLUTION:

var alphabetize = function(strArr) {
  return strArr.sort(function(a, b) {
    return a.localeCompare(b);
  });
};
