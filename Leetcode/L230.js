/*
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
  */

var kthSmallest = function (root, k) {
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current.val);
    if (current.left) queue.push(current.val);
    if (current.right) queue.push(current.val);
  }
  //console.log(result);
  result.sort((a, b) => a - b);
  return result[k - 1];
};

console.log(kthSmallest([3, 1, 4, null, 2], 1)); // 1
