class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//*Instances of Node
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
a.next = b;
b.next = c;
c.next = d;
//* A -> B -> C -> D -> Null

//* Print out/Traversing the Linked List Using *** Iterative ***
const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};
printLinkedList(a);

//* Print out/Traversing the Linked List Using *** Recursion ***
const printLinkedListRecursion = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedListRecursion(head.next);
};
printLinkedListRecursion(a);
