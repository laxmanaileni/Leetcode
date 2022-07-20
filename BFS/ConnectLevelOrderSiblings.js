class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var averageOfLevels = function (root) {
  if (!root) {
    return;
  }
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let length = queue.length,
      previous = null;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (previous != null) {
        previous.next = node;
      }
      previous = node;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(averageOfLevels(root));
