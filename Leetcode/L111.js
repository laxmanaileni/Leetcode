var minDepth = function (root) {
  if (!root) return 0;
  let queue = [];
  queue.push(root);
  let minDepth = 1;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (!node.left && !node.right) return minDepth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    minDepth++;
  }
  return minDepth;
};
