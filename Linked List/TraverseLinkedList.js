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

//* Iterative
const Traverse = (head) => {
  let traverseArray = [];
  let current = head;
  while (current !== null) {
    traverseArray.push(current.val);
    current = current.next;
  }
  return traverseArray;
};
console.log(Traverse(a));

//* Recursive
let values = [];
const TraverseRecursive = (head) => {
  if (head === null) return values;
  values.push(head.val);
  return TraverseRecursive(head.next);
};
console.log(TraverseRecursive(a));
