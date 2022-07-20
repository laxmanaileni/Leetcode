/** Given the root of a binary tree, invert the tree, and return its root. */

//* Recursion
var invertTree = function (root) {
  if (root === null) return root; // Return null
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]; // Swap the left and right places of Binary Tree
  return root;
};

//*DFS Iterative
/*
var invertTree = function(root) {
    if(root === null)return root; // Return null
    let stack=[root];
    
    while(stack.length>0){
        let current=stack.pop();
        if(current !== null){
                [current.left,current.right]=[current.right,current.left];
                stack.push(current.left,current.right)
        }
    }
    return root
}
*/

//* BFS Iterative
/*
var invertTree = function(root) {
    if(root === null)return root
    let queue=[root];
    while(queue.length>0){
    let current=queue.shift();
    if(current !== null){
    [current.left,current.right]=[current.right,current.left];
    queue.push(current.left,current.right)
    }
    }
    return root;
}
*/

console.log(invertTree([4, 2, 7, 1, 3, 6, 9])); //[4,7,2,9,6,3,1]
