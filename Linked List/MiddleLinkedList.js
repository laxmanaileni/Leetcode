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

const MiddleLinkedList = (head) => {
  if (!head) return;
  let middle = head;
  while (head && head.next) {
    head = head.next.next;
    middle = middle.next;
  }
  return middle;
};

console.log(MiddleLinkedList(a));
/**Node {
  val: 3,
  next: Node { val: 4, next: Node { val: 5, next: null } }
} */
