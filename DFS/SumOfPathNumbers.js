/**
 * Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
 */

 class TreeNode {
    constructor(value, left = null, right = null) {//not solved
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }



  var pathSum = function(root) {
    return findPath(root,[]) 
};

var findPath=function(root,Paths){
    if(!root)return 0
    if(!root.right && !root.left){
      return [Paths.concat(root.val)]
    }
    return [...findPath(root.left,Paths.concat(root.val)),...findPath(root.right,Paths.concat(root.val))];
}



  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  
  console.log(`Tree has path: ${pathSum(root)}`);
  