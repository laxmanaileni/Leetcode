class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Method 1
// const PathSum = (root) => {
//   if (root === null) return 0;
//   return root.value + Math.max(PathSum(root.left), PathSum(root.right));
// };

//Method 2
const PathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.value;
  return root.value + Math.max(PathSum(root.left), PathSum(root.right));
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

//         5
//    11       3
// 4     15       12
console.log(PathSum(a));
