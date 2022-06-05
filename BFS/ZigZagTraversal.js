class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var ZigZagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [];
  queue.push(root);
  let count = 0;
  while (queue.length) {
    let len = queue.length,
      level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (count % 2 === 0) {
      result.push(level);
      count++;
    } else {
      result.push(level.reverse());
      count++;
    }
  }
  return result;//[ [ 12 ], [ 1, 7 ], [ 9, 10, 5 ], [ 17, 20 ] ]
};

/*
var ZigZagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [];
  queue.push(root);
  let count = 0;
  while (queue.length) {
    let len = queue.length,
      level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (count % 2 === 0) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    count++;
    result.push(level);
  }
  return result;//[ [ 12 ], [ 1, 7 ], [ 9, 10, 5 ], [ 17, 20 ] ]
};
*/
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(ZigZagLevelOrder(root));
