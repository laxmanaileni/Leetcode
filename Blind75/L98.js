/**Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 */

var isValidBST = function (root, min = null, max = null) {
  if (!root) return false;

  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

console.log(isValidBST([2, 1, 3]));//true
