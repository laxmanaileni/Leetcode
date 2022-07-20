class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//* Iterative version
const DFS = (root) => {
  if (root === null) return [];
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

//* Recursive version
const DFSRecursive = (root) => {
  if (root === null) return [];
  let leftValues = DFSRecursive(root.left);
  let rightValues = DFSRecursive(root.right);
  return [root.value, ...leftValues, ...rightValues];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(DFS(a));
console.log(DFSRecursive(a));
