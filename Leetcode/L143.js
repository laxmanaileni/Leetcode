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
a.next = b;
b.next = c;
c.next = d;

var reorderList = function (head) {
  if (!head) return;
  let current = head;
  let middle = MiddleLinkedList(head);
  let rev = reverseList(middle.next);

  while (rev) {
    // Reordering the linkedlist
    let next = current.next;
    current.next = rev;
    rev = rev.next;
    current.next.next = next;
    current = next;
  }
  middle.next = null;
  return head;
};

const MiddleLinkedList = (head) => {
  if (!head) return;
  let middle = head;
  while (head && head.next) {
    head = head.next.next;
    middle = middle.next;
  }
  return middle;
};

const reverseList = (head) => {
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
