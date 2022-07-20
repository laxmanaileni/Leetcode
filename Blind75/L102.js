/** Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). */

var levelOrder = function (root) {
  if (root === null) return [];
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let len = queue.length;
    let level = [];

    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    result.push(level);
  }
  return result;
};

console.log(levelOrder([3, 9, 20, null, null, 15, 7])); // [[3],[9,20],[15,7]]
console.log(levelOrder([1])); // [[1]]
