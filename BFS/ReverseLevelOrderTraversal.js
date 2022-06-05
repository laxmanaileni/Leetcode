class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/*
var reverseLevelOrder = function (root) {
  if (!root) return [];
  let queue = [];
  queue.push(root);
  let result = [];
  while (queue.length) {
    let length = queue.length;
    level = [];
    for (let i = 0; i < length; i++) {
      let node = queue.pop();
      level.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    result.push(level);
  }
     return result.reverse();
  //return result;
};
*/
var reverseLevelOrder = function (root) {
  if (!root) return [];
  let queue = [];
  queue.push(root);
  let result = [];
  while (queue.length) {
    let length = queue.length;
    level = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.unshift(level);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(reverseLevelOrder(root));
