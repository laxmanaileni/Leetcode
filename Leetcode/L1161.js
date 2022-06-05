var maxLevelSum = function (root) {
  if (!root) return [];
  let queue = [];
  queue.push(root);
  let maxSum = -10000,
    minLevel = 0,
    count = 0;
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
    count++;
    for (let i = 0; i < level.length; i++) {
      sum += level[i];
    }
    if (maxSum < sum) {
      maxSum = sum;
      minLevel = count;
    }
  }
  return minLevel;
};
