/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 */
/*
If the p and q are other sides of root then answer will be root
If the p and q are less than root value then answer will be in root.left
If p and q are greater than root value then answer will be in root.right
*/
//* Iterative
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      break;
    }
  }
  return root;
};
//* Recursive
var lowestCommonAncestorRecursive = function (root, p, q) {
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8)
); //6

console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4)
); //2
