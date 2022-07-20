/* Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.*/

var buildTree = function (preorder, inorder) {
  //Store all the values of inorder with indexes in Hashmap.
  let map = {};
  inorder.forEach((e, i) => (map[e] = i));

  let recursive = (start, end) => {
    if (start > end) return null;
    let root = new TreeNode(preorder.shift()); // First element of preorder is root
    root.left = recursive(start, map[root.val] - 1); // recurive for left of root
    root.right = recursive(map[root.val] + 1, end); //recursive for right of root
    return root;
  };

  return recursive(0, inorder.length - 1);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
