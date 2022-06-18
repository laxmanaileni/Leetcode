//*Creation of Node
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

//* Creation of Linked List
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //* Size of a Linked List

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  //* Clear the Linked List
  clear() {
    this.head = null;
  }

  //* Get Last node of Linked List

  getLast() {
    let node = this.head;
    if (node) {
      while (node.next) {
        node = node.next;
      }
    }
    return node;
  }

  //* Get First node of the Linked List

  getFirst() {
    return this.head;
  }

  remove(head,value){
if(!head)return head;

  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;


