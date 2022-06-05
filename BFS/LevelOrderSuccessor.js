class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var averageOfLevels = function (root,key) {
  if (!root) {
    return [];
  }
  let queue = [];
  queue.push(root);
  let res = [],
    count = false;
  while (queue.length) {
    let length = queue.length,
      level = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if(count){return node.val}
      level.push(node.val);
      if (node.val === key) {
        count = true;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(level);
  }
  //return res;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(averageOfLevels(root,3));
