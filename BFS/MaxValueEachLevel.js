class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var maxValue = function (root) {
  if (root === null) maxValue = null;
  let queue = [];
  queue.push(root);
  let result = [],
    level;
  while (queue.length > 0) {
    let len = queue.length;
    level = [];
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(Math.max(...level));
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(maxValue(root));
