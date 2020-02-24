class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  
class BinarySearchTree {
  constructor(root = null){
    this.root = new Node(root);
  }
  
  add(value){
    let node = new Node(value);
    if(!this.root) this.root = node;
    else {
      let current = this.root;
      // eslint-disable-next-line no-extra-boolean-cast
      while(!!current){
        if(node.value < current.value){
          if(!current.left){
            current.left = node;
            break;
          }
          current = current.left;
        }
        if(node.value >= current.value){
          if(!current.right){
            current.right = node;
            break;
          }
          current = current.right;
        }
        else {
          break;
        }
      }
    }
    return this;
  }
  
}
  
module.exports = { Node, BinarySearchTree };
  
