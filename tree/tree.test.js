
const { Node, BinarySearchTree } = require('../challenges/tree/tree');

describe('Node class', () => {
  let node;
  beforeEach(() => {
    node = new Node(3);
  });

  it('has a value', () => {
    expect(node.value).toEqual(3);
  });

  
  describe('BinarySearchTree class', () => {
    // eslint-disable-next-line no-unused-vars
    let tree;
    beforeEach(() => {
      tree = new BinarySearchTree(3);
      
      it('can instantiate a new tree with root null', () => {
        const emptyTree = new BinarySearchTree();
        expect(emptyTree.root.value).toEqual(null);
      });
            
    });
  });

});
