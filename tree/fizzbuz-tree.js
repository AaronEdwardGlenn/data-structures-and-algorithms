const { BinarySearchTree } = require('../tree/tree');

const fizzBuzzTree = tree => {
  const treeRootNodeCopy = tree.clone(tree.root);
  const copyTree = new BinarySearchTree(treeRootNodeCopy);