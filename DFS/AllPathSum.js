var pathSum = function(root, targetSum) {
    return findPaths(root,targetSum, [])
    
};

var findPaths=function(root,targetSum,allPaths){
    if(!root)return [];
    if(!root.right  && !root.left ){
        return targetSum-root.val===0?[allPaths.concat(root.val)]:[];
    }
    return [...findPaths(root.left,targetSum-root.val,allPaths.concat(root.val)), 
            ...findPaths(root.right,targetSum-root.val,allPaths.concat(root.val))]
}