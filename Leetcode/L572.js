/**Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise. */

var isSubtree = function (root, subRoot) {
  //Check if the two binary trees are identical
  const areEqual = (node, node2) => {
    if (!node || !node2) return !node && !node2;
    if (node.val !== node2.val) return false;
    return areEqual(node.left, node2.left) && areEqual(node.right, node2.right);
  };

  const dfs = (node) => {
    if (!node) return false;
    if (areEqual(node, subRoot)) return true;
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
};

console.log(isSubtree([3, 4, 5, 1, 2], [4, 1, 2])); // true
