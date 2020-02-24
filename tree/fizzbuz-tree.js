const { BinarySearchTree } = require('../tree/tree');

const fizzBuzzTree = tree => {
  const treeRootNodeCopy = tree.clone(tree.root);
  const copyTree = new BinarySearchTree(treeRootNodeCopy);

  (function transformCopy(current){
    if(current){
      transformCopy(current.left);
      transformCopy(current.right);
     
  return copyTree;
};
});

module.exports = { fizzBuzzTree };
