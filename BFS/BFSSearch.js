class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var searchBST = function (root, val) {
  if (!root) return null;
  console.log(root.val, val);
  // if(root.val == val){
  if (root.val === val) return root;

  if (val < root.val) return searchBST(root.left, val);
  if (val < root.val) return searchBST(root.right, val);
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(searchBST(root, 7));
