//https://leetcode.com/problems/invert-binary-tree/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  if (root === null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree[root.left]];
  return root;
};

const invertTreeIterativeDFS = (root) => {
  if (root === null) return root;
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current !== null) {
      [current.left, current.right] = [current.right, current.left];
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
  }
  return root;
};

const invertTreeIterativeBFS = (root) => {
  if (root === null) return null;
  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    if (current !== null) {
      [current.left, current.right] = [current.right, current.left];
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return root;
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
