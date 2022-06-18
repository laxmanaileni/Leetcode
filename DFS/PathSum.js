class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

var hasPathSum = function (root, targetSum) {
  //Check root has leaf nodes and deduct root value from targetSum and supply this to leaf nodes
  //Check it has leaf node and the root.val is equal t0 targetSum

  if (root === null) return false;
  if (targetSum === root.val && root.left === null && root.right === null) {
    return true;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);
