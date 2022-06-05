var sumOfLeftLeaves = function(root) {
    const stack = [];
   const res = [];
     let sum=0;
   while (root || stack.length) {
     if (root) {
       stack.push(root);
       root = root.left;
         if(root!==null && root.left === null && root.right ===null){
             sum+=root.val
         }
     } else {
       root = stack.pop();
       res.push(root.val);
       root = root.right;
     }
   }
   return sum; 
 };