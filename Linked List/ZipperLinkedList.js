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

const e = new Node("E");
const f = new Node("F");
const g = new Node("G");
const h = new Node("H");
e.next = f;
f.next = g;
g.next = h;
//* E -> F -> G -> H -> Null

//* Iterative
const ZipperLists = (head1, head2) => {
  let count = 0;
  let current1 = head1.next,
    current2 = head2,
    tail = head1;
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 !== null) {
    tail.next = current1;
  }
  if (current2 !== null) {
    tail.next = current2;
  }
  return head1;
};
//console.log(ZipperLists(a, e)); // A -> E -> B -> F -> C -> G -> D -> H -> null

//* Recursive
const ZipperListsRecursive = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = ZipperListsRecursive(next1, next2);
  return head1;
};
console.log(ZipperListsRecursive(a, e));
