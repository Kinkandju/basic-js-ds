const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
*/

//! Queue structure:
//! FIFO - First In First Out

//? -----------------------
//?  <->  ...  4 3 2 1  <-> 
//? -----------------------

//! Base operation: ENQUEUE / DEQUEUE / PEEK / IS_EMPTY / IS_FULL / SIZE / CLEAR
//* ENQUEUE - add an element to the end of the queue
//* DEQUEUE - remove an element from the front of the queue and return it
//* PEEK - view the element at the front of the queue without removing it
//* IS_EMPTY - check if the queue is empty
//* IS_FULL - check if the queue is full (if the queue implementation has a fixed size)
//* SIZE - get the current size of the queue
//* CLEAR - remove all elements from the queue, making it empty

class Queue {
  constructor() {
    this.storage = {},
    this.top = 0,
    this.end = 0
  }

  getUnderlyingList() {
    let result = null;
    let currNode = null;
  
    // iterating through the elements from the top to the end of the queue
    for (let i = this.top; i < this.end; i += 1) {

      // creating a new node with the current value from the queue
      const newNode = {
        value: this.storage[i],
        next: null
      }
  
      // if there is no previous node at the moment, make the current node the first node
      if (currNode === null) {
        currNode = newNode;
        result = newNode;

      // if there is already a previous node, link the current node to the previous one
      } else {
        currNode.next = newNode;
        currNode = newNode;
      }
  
      // check if there is a next node after the current one
      if (i + 1 < this.end) {

        // creating a new node with the value of the next item from the queue
        currNode.next = { 
          value: this.storage[i + 1], 
          next: null 
        };
      }
    }
  
    return result;
  }

  enqueue(value) {
    this.storage[this.end] = value;

    this.end += 1;
  }

  dequeue() {
    let removedValue = this.storage[this.top];

    delete this.storage[this.top];
    
    this.top += 1;

    return removedValue;
  }
}

module.exports = {
  Queue
};
