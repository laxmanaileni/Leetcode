var getMinimumDifference = function (root) {
  //Same question as 783 and 530
  if (!root) {
    return 0;
  }
  let result = [],
    min = Infinity;
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  result.sort((a, b) => a - b);
  for (let i = 0; i < result.length - 1; i++) {
    min = Math.min(result[i + 1] - result[i], min);
  }
  return min;
};
