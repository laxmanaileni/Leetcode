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

//* Find Target Recursive
const FindTargetRecursive = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return FindTargetRecursive(head.next, target);
};

console.log(FindTargetRecursive(a, "C"));

const FindTarget = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) {
      return true;
    }
    current = current.next;
  }
  return false;
};

console.log(FindTarget(a, "C"));
