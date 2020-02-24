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
  
  levelTraverse(){
    if(this.root === null) return;
    const queue = [this.root];
    const returnArray = [];
    while(queue.length > 0){
      const current = queue[0];
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
      returnArray.push(queue.shift().value);
    }
    return returnArray;
  }
}
  
module.exports = { Node, BinarySearchTree };
  
