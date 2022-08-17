//https://leetcode.com/problems/diameter-of-binary-tree/

var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let max = 0;
  const helper = (node) => {
    if (!node) return 0;

    let leftheight = helper(node.left);
    let rightheight = helper(node.right);
    max = Math.max(leftheight + rightheight, max);

    return Math.max(leftheight, rightheight) + 1;
  };
  helper(root);
  return max;
};

console.log(diameterOfBinaryTree([1, 2, 3, 4, 5]));
