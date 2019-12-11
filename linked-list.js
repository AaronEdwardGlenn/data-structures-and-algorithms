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
        while(current) {
            if (current.next.value === val) {
                node.next = current.next
                current.next = node;
            }
            current = current.next;
        }


    }
    insertAfter(val, newVal) {

        let node = new Node(newVal);
        let curent = this.head; 
        while(current) {
            if(current.value === val) {
                node.next = current.next; 
                current.next = node;

        } 
        curent = current.next;

    
    }

    append(val, newVal) {

    }
}
module.exports = LinkedList;