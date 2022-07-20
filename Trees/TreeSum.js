class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//* BFS
const TreeSum = (root) => {
  if (root === null) return 0;
  let sum = 0;
  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    sum += current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
};

//* DFS
const TreeSumDFS = (root) => {
  if (root === null) return 0;
  return root.value + TreeSumDFS(root.left) + TreeSumDFS(root.right);
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(TreeSum(a));
console.log(TreeSumDFS(a));
