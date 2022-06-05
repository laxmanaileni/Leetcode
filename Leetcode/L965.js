var isUnivalTree = function (root) {
  if (!root) return false;
  let queue = [];
  queue.push(root);
  let result = [];
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  let set = new Set(result);
  return set.size === 1 ? true : false;
};
