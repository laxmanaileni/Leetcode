// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      break;
    }
  }
  return root;
};
var lowestCommonAncestorR = function (root, p, q) {
  if (p.val < root.val && q.val < root.val){
    return lowestCommonAncestorR(root.left, p, q);
  }else if (p.val > root.val && q.val > root.val){
    return lowestCommonAncestorR(root.right, p, q);
  }else{
    return root;
  }
};

console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8)
);
