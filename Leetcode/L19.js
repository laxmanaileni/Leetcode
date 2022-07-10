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

var removeNthFromEnd = function (head, n) {
  let size = 0;
  let c = head;
  while (c !== null) {
    size++;
    c = c.next;
  }
  //* Base Cases
  if (size === 1 && n === 1) return null;
  if (size === n) return head.next;

  let index = size - n;
  let current = head;
  let count = 0;
  while (current !== null) {
    if (index - 1 === count) {
      let next = current.next.next;
      current.next = next;
    } else {
      current = current.next;
    }
    count++;
  }
  return head;
};

console.log(removeNthFromEnd(a, 4));
