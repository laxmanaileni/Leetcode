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

const Reverse = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};

console.log(Reverse(a));

const ReverseRecursive = (head, prev = null) => {
  if (head === null) return prev;
  let next = head.next;
  head.next = prev;
  return ReverseRecursive(next, head);
};

console.log(ReverseRecursive(d));
