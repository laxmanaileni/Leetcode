class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

const TreeIncludesBFS = (root, target) => {
  if (root === null) return false;

  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    if (current.value === target) {
      return true;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

const TreeIncludesDFS = (root, target) => {
if(root === null)return false;
if(root.value === target)return true;

return TreeIncludesDFS(root.left,target) || TreeIncludesDFS(root.right,target)
}

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(TreeIncludesBFS(a, "e"));
console.log(TreeIncludesDFS(a, "e"));
