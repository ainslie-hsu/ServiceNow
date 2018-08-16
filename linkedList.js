// Implement a linked list of strings that can add and delete elements

// SOLUTION:

// Linked list constructor:
var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

// Node constructor:
var Node = function(str) {
  this.value = str;
  this.next = null;
};
