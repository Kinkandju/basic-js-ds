const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
*/

//! Stack structure:
//! LIFO - Last In First Out

//? -----------------
//?   1 2 3 4 ...  <-> 
//? -----------------

//! Base operation: PUSH / POP / TOP / SIZE / IS_EMPTY
//* PUSH - adds an element to the top
//* POP - takes away the top element
//* TOP - a pointer that allows you to see what lies at the top (in this case, the element is not removed from the stack)
//* SIZE - determines how many items are contained in the stack
//* IS_EMPTY - a method for checking the stack for the presence or absence of elements in it

class Stack {
  constructor() {
    this.storage = {},
    this.size = 0
  }

  push(element) {
    this.size += 1;

    this.storage[this.size] = element;
  }

  pop() {
    let removedElement = this.storage[this.size];

    delete this.storage[this.size];

    this.size -= 1;

    return removedElement;
  }

  peek() {
    return this.storage[this.size];
  }
}

module.exports = {
  Stack
};
