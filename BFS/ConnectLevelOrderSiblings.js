class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var averageOfLevels = function (root, key) {
  if (!root) {
    return;
  }
  let queue = [];
  queue.push(root);
  let res = [],
    count = false;
  while (queue.length) {
    let length = queue.length,
      previous = 0;
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
  //return res;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(averageOfLevels(root, 3));
