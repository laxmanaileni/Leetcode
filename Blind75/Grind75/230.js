// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
var kthSmallest = function (root, k) {
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  result.sort((a, b) => a - b);
  return result[k - 1];
};

console.log(kthSmallest([3, 1, 4, null, 2], 1)); //1
