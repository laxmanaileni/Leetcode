var mergeTrees = function(root1, root2) {
    if(root1 === null) return root2;
   if(root2 === null) return root1;
   let queue=[];
   let merge=root1;
   queue.push({v1:merge,v2:root2});
   
   while(queue.length ){
        let {v1,v2}=queue.shift();
       v1.val+=v2.val;
      if(v1.left && v2.left) queue.push({v1 : v1.left, v2 : v2.left}); // if both node's left are existed, push data pair to queue
       if(!v1.left && v2.left) v1.left = v2.left; // if only v2's left is existed, set v1's left to v2's left
       
       //We do the same for the right child pair as well
       if(v1.right && v2.right) queue.push({v1 : v1.right, v2 : v2.right});
       if(!v1.right && v2.right) v1.right = v2.right;
   }
   return merge ;
};