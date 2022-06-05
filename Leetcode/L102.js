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
