class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//*Instances of Node
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

//* Reverse the Linked List

var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

console.log(reverseList(a));
