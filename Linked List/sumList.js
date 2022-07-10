class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//*Instances of Node
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;


//*Iterative
const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};
console.log(sumList(a));

//*Recursive
const sumListRecursive = (head) => {
  let sum = 0;
  return helperSum(head, sum);
  /**
   *  if (head === null) return 0;
   * return head.val+sumListRecursive(head.next)
   */
};

const helperSum = (head, sum) => {
  if (head === null) return sum;
  sum += head.val;
  return helperSum(head.next, sum);
};

console.log(sumListRecursive(a));
