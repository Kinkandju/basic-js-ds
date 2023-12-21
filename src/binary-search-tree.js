const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(data) {
    this.root = new Node(data);
    this.count = 1;
  }

  getRoot() {
    let currentNode = this.root;
    
    if (currentNode.data) {
      return currentNode.data;
    }

    return null;
  }

  add(data) {
    this.count += 1;

    let newNode = new Node(data);

    const searchTree = node => {
      // if data < node.data -> go left
      if (data < node.data) {

        // if no left child -> add new node
        if (!node.left) {
          node.left = newNode;
        }

        // if left child exist -> look left again
        else {
          searchTree(node.left);
        }
      }

      // if data > node.data -> go right
      else if (data > node.data) {

        // if no right child -> add new node
        if (!node.right) {
          node.right = newNode;
        }

        // if right child exist -> look right again
        else {
          searchTree(node.right);
        }
      }
    }

    searchTree(this.root);
  }

  has(data) {
    let currentNode = this.root;

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
    let currentNode = this.root;

    while(currentNode) {
      if (data === currentNode.data) {
        return currentNode.data;
      }
  
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    this.count -= 1;

    this.root = this.removeNode(this.root, data);
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
    let currentNode = this.root;

    // go to the left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.root;

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
