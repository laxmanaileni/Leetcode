class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//* Instances of Node
const a = new Node(3);
const b = new Node(2);
const c = new Node(0);
const d = new Node(-4);

a.next = b;
b.next = c;
c.next = d;

//* If you want to search whether the linked list is cyclic or not use hare and tortoise problem / Fast and slow pointer
var hasCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

console.log(hasCycle(a, 1));
