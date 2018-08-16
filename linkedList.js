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

// Add to tail:
LinkedList.prototype.addToTail = function(str) {
  var newTail = new Node(str);

  if (!this.head && !this.tail) {
    this.head = newTail;
    this.tail = newTail;
  } else {
    this.tail.next = newTail;
    this.tail = newTail;
  }

  return this;
};

// Append node to target element
LinkedList.prototype.appendToElement = function(target, str) {
  var newNode = new Node(str);
  var currentNode = this.head;

  if (target === this.tail.value) {
    this.addToTail(str);
  }

  while (currentNode) {
    if (currentNode.value === target) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    currentNode = currentNode.next;
  }

  return this;
};

// Remove from head:
LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  } else {
  this.head = this.head.next;
  }

  return this;
};

// Node constructor:
var Node = function(str) {
  this.value = str;
  this.next = null;
};
