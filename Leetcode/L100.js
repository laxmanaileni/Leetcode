var isSameTree = function(p, q) {
    let queue=[p,q];
    
    while(queue.length){
        let first=queue.shift();
        let second=queue.shift();
        
        if(!first && !second)continue;
        if(!first || !second || first.val !== second.val){
            return false;
        }
        queue.push(first.left)
        queue.push(second.left)
        queue.push(first.right)
        queue.push(second.right)
    }
    return true
};