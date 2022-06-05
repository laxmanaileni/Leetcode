class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  let queue = [];
  queue.push(root);
  let res = [];
  while (queue.length) {
    let length = queue.length,
      level = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    let sum = 0;
    for (let i = 0; i < level.length; i++) {
      sum += level[i];
    }
    res.push(sum / level.length);
  }
  return res;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(averageOfLevels(root));
