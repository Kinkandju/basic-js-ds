const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    this.count = 1;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.count += 1;

    this.rootNode = addNode(this.rootNode, data);

    function addNode(currentNode, data) {
      // if no node (place is empty)
      if (!currentNode) {
        return new Node(data);
      }

      // if such node exist
      if (currentNode.data === data) {
        return currentNode;
      }

      // if data < node.data -> go left
      if (data < currentNode.data) {
        currentNode.left = addNode(currentNode.left, data);
      }

      // if data > node.data -> go right
      else {
        currentNode.right = addNode(currentNode.right, data);
      }

      return currentNode;
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while(currentNode) {
      if (data === currentNode.data) {
        return true;
      }
  
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    function getNode(currentNode, data) {
      // if no node
      if (!currentNode) {
        return null;
      }

      // if such node exist
      if (currentNode.data === data) {
        return currentNode;
      }

      // if data < currentNode.data -> go left
      if (data < currentNode.data) {
        return getNode(currentNode.left, data);
      }

      // if data > currentNode.data -> go right
      else {
        return getNode(currentNode.right, data);
      }
    }

    return getNode(this.rootNode, data);
  }

  remove(data) {
    this.count -= 1;

    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(currentNode, data) {

    // node was not found
    if (currentNode === null) {
      return null;
    }

    // node found
    if (data === currentNode.data) {
      
      // 1: node has no children
      if (currentNode.left === null && currentNode.right === null) {
        return null;

        // 2: node has only a right child
      } else if (currentNode.left === null) {
        return currentNode.right;

        // 2: node has only a left child
      } else if (currentNode.right === null) {
        return currentNode.left;

        // 3: node has both left and right children
      } else {
        const minNode = this.getMinNode(currentNode.right);

        currentNode.data = minNode.data;
        currentNode.right = this.removeNode(currentNode.right, minNode.data);

        return currentNode;
      }
    } 
    
    // node to be removed is in the left subtree
    else if (data < currentNode.data) {
      currentNode.left = this.removeNode(currentNode.left, data);

      return currentNode;
    }
    
    // node to be removed is in the right subtree
    else {
      currentNode.right = this.removeNode(currentNode.right, data);

      return currentNode;
    }
  }

  getMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.getMinNode(node.left);
    }
  }

  min() {
    let currentNode = this.rootNode;

    // go to the left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;

    // go to the right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
