/**Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. */

var maxDepth = function (root) {
  let maxDepth = 0;
  let BFS = (currentNode, level) => {
    if (currentNode === null) return;
    if (maxDepth < level) maxDepth = level;
    BFS(currentNode.left, level + 1);
    BFS(currentNode.right, level + 1);
  };
  BFS(root, 1);
  return maxDepth;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));//3
