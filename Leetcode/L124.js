/** A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.*/

var maxPathSum = function (root) {
  if (root === null) return 0;
  let maxValue = -Infinity;
  let getMaxSum = (node) => {
    if (node === null) return 0;
    let leftValues = Math.max(0, getMaxSum(node.left)); //Get the left tree sum
    let rightValues = Math.max(0, getMaxSum(node.right)); //Get the right tree sum
    maxValue = Math.max(node.val + leftValues + rightValues, maxValue); // Find the max Value
    return node.val + Math.max(leftValues, rightValues);
  };
  getMaxSum(root);
  return maxValue;
};

console.log(maxPathSum([1, 2, 3])); //6
console.log(maxPathSum([-10, 9, 20, null, null, 15, 7])); //42
