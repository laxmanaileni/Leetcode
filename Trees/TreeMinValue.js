class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//* DFS Recursive
const TreeMinValue = (root) => {
  if (root === null) return Infinity;

  const leftMin = TreeMinValue(root.left);
  const rightMin = TreeMinValue(root.right);
  return Math.min(root.value, leftMin, rightMin);
};

//* DFS  Iterative
const TreeMinValueDFS = (root) => {
  let stack = [root];
  let minValue = Infinity;
  while (stack.length > 0) {
    let current = stack.pop();
    if (minValue > current.value) minValue = current.value;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return minValue;
};

//* BFS O(N^2)
const TreeMinValueBFS = (root) => {
  let queue = [root];
  let minValue = Infinity;
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.value < minValue) {
      minValue = current.value;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return minValue;
};

const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(15);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(TreeMinValue(a)); //3
console.log(TreeMinValueDFS(a)); //3
console.log(TreeMinValueBFS(a)); //3
