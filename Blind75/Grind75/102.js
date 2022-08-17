//https://leetcode.com/problems/binary-tree-level-order-traversal/
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length > 0) {
    let len = queue.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    res.push(level);
  }
  return res;
};

console.log(levelOrder([3, 9, 20, null, null, 15, 7]));
