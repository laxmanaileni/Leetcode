
var getTargetCopy = function(original, cloned, target) {
    let queue=[];
    queue.push(cloned)
 while(queue.length){
     let len=queue.length;
 
     for(let i=0;i<len;i++){
             let node=queue.shift();
        //console.log(node.val,target.val)
         if(node.val === target.val){ 
           return node
             }
         if(node.left)queue.push(node.left)
           if(node.right)queue.push(node.right)
     }
     
 }
};