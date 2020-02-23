
const { Node, BinarySearchTree } = require('../challenges/tree/tree');

describe('Node class', () => {
  let node;
  beforeEach(() => {
    node = new Node(3);
  });

  it('has a value', () => {
    expect(node.value).toEqual(3);
  });
