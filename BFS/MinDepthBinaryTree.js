class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

var minDepth = function(root) {
    if(!root) return 0
    let queue=[];
    queue.push(root);
    let minDepth=1;
    while(queue.length){
        let len=queue.length;
        for(let i=0;i<len;i++){
            let node=queue.shift()
            if(!node.left && !node.right) return minDepth
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right)
        }
        minDepth++
    }
    return minDepth;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(10);

console.log(minDepth(root));