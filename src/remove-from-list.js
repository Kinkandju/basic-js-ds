const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
*/

function removeKFromList(l, k) {
  // if the list is empty, then return null
  if (l === null) {
    return null;
  }

  // create a fake node to serve as the new head of the modified list
  const fakeNode = new ListNode(0);
  fakeNode.next = l;

  // create two pointers: prev (to keep track of the previous node)
  // and curr (to iterate through the list)
  let prev = fakeNode;
  let curr = l;

  // go through all the nodes of the singly linked list
  while (curr !== null) {

    // when a node with value k is found, skip it by updating the prev pointer
    if (curr.value === k) {
      prev.next = curr.next;

      // move the prev pointer to the current node
    } else {
      prev = curr;
    }

    // move the curr pointer to the next node in the list
    curr = curr.next;
  }

  // returns the resulting modified singly linked list without a fake node
  return fakeNode.next;
}

module.exports = {
  removeKFromList
};
