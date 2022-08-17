// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
let maxDepth=0;
if(!root)return 0;

const BFS=(node,level)=>{
if(!node)return 
if(maxDepth<level)maxDepth=level;
BFS(node.left,level+1);
BFS(node.right,level+1)
}

BFS(root,1)

return maxDepth;
}

console.log(maxDepth([3,9,20,null,null,15,7]))