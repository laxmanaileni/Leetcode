var hasPathSum = function(root, targetSum) { 
    //Check root has leaf nodes and deduct root value from targetSum and supply this to leaf nodes
    //Check it has leaf node and the sum is equal tp targetSum
    
    if(root===null)return false
    if(targetSum===root.val && root.left===null && root.right===null){
            return true;
        }    
    return hasPathSum(root.left,targetSum-root.val) ||    hasPathSum(root.right,targetSum-root.val)
};