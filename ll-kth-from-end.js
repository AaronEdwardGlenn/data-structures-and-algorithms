class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
    }
    includes(val) {
        let current = this.head;
        while(current !== null) {
            if(current.value === val) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    toString() {
        let str = '';
        let current = this.head;
        while(current !== null) {
            str += `${current.value} `;
            current = current.next;
        }
        return str;
    }

    insertBefore(val, newVal) {

        let node = new Node(newVal); 
        let current = this.head ; 
        while(current.next.value !== val) {
                current = current.next
            }
            node.next = current.next; 
            current.next = node;
        }
    

    insertAfter(val, newVal) {

        let node = new Node(newVal);
        let curent = this.head; 
        while(current.value !== val) {
                current.next = next;
        } 
        node.next = current.next;
        current.next = node;
      }
    

    append(value){
        const node = new Node(value);
        let current = this.head;
        while(current.next !== null){
          current = current.next;
        }
        current.next = node;
      }

      kthFromEnd(num){

        if(num < 0){
          return 'Please input a positive number';
        }
        if(this.head === null){
          return 'No items in list';
        }
    
        let current = this.head;
        let lengthCounter = 1;
        while(current.next !== null){
          current = current.next;
          lengthCounter++;
        }
    
        if(num > lengthCounter){
          return 'Provided number is higher than length of list. Please provide number within the linked list\'s length.';
        }
        
        current = this.head;
        for(let i = 0; i < lengthCounter - 1 - num; i++){
          current = current.next;
        }
        return current.value;
      
    };
    
};

module.exports = LinkedList;

