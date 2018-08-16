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

// Remove from tail:
LinkedList.prototype.removeTail = function() {
  var currentNode = this.head;

  while(currentNode.next.next) {
    currentNode = currentNode.next;
  }

  this.tail = currentNode;
  this.tail.next = null;

  return this;
};

// Remove element by target:
LinkedList.prototype.removeElement = function(target) {
  var currentNode = this.head;

  if (target === this.head.value) {
    this.removeHead();
  }

  if (target === this.tail.value) {
    this.removeTail();
  }

  while (currentNode.next) {
    if (currentNode.next.value === target) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }

  return this;
};

// Node constructor:
var Node = function(str) {
  this.value = str;
  this.next = null;
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

// Test addToHead:
var linkedList = new LinkedList();
linkedList.addToHead('one');

var actual = linkedList.head.value;
var expected = 'one';

assertEqual(actual, expected, 'addToHead');

// Test addToHead again:
linkedList.addToHead('two');

var actual = linkedList.head.value;
var expected = 'two';

assertEqual(actual, expected, 'addToHead');

// Test addToTail:
linkedList.addToTail('three');

var actual = linkedList.tail.value;
var expected = 'three';

assertEqual(actual, expected, 'addToTail');

// Test appendToElement:
linkedList.appendToElement('two', 'four');

var actual = linkedList.head.next.value;
var expected = 'four';

assertEqual(actual, expected, 'appendToElement');

// Test removeHead
linkedList.removeHead();

var actual = linkedList.head.value;
var expected = 'four';

assertEqual(actual, expected, 'removeHead');

// Test removeTail
linkedList.removeTail();

var actual = linkedList.tail.value;
var expected = 'one';

assertEqual(actual, expected, 'removeTail');

// Test removeElement
linkedList.removeElement('four');

var actual = linkedList.tail.value;
var expected = 'one';

assertEqual(actual, expected, 'removeElement');
