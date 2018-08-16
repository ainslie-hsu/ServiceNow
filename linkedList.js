// Implement a linked list of strings that can add and delete elements

// SOLUTION:

// Linked list constructor:
var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

// Add to head:
LinkedList.prototype.addToHead = function(str) {
  var newHead = new Node(str);

  if (!this.head && !this.tail) {
    this.head = newHead;
    this.tail = newHead;
  } else {
    newHead.next = this.head;
    this.head = newHead;
  }

  return this;
};

// Node constructor:
var Node = function(str) {
  this.value = str;
  this.next = null;
};
