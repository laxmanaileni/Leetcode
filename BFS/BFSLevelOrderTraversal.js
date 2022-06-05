class TreeNode {
  constructor(val,left=null,right=null) {
    this.val =val;
    this.left = left;
    this.right =  right;
  }
}

var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length,
      level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(levelOrder(root));
