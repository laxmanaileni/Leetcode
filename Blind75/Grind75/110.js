//https://leetcode.com/problems/balanced-binary-tree/

var isBalanced = function (root) {
  let balanced = true;
  const find = (root) => {
    if (!root) return 0;
    if (balanced === false) return false;
    let leftheight = find(root.left);
    let rightheight = find(root.right);
    diff = Math.abs(leftheight - rightheight);
    if (diff > 1) balanced = false;

    return Math.max(leftheight, rightheight) + 1;
  };
  find(root);
  return balanced;
};

console.log(isBalanced([3, 9, 20, null, null, 15, 7]));
