function Node(val, neighbors) {
        this.val = val === undefined ? 0 : val;
      this.neighbors = neighbors === undefined ? [] : neighbors;
    };
var cloneGraph = function (node,map=new Map()) {
    if(!node) return null
    map.set(node, new Node(node.val))
    const queue = [node]
    while(queue.length){
      const n = queue.shift()
      for(let k of n.neighbors){
        if(!map.has(k)){
          map.set(k, new Node(k.val))
          queue.push(k)        
        }      
        map.get(n).neighbors.push(map.get(k))
      }
    }
    return map.get(node)
};

console.log(
  cloneGraph([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ])
);
