//*Recursive
/* 
const hasPath = (graph, src, dst) => {
  if(src===dst)return true;

  for(let neighbor of graph[src]){
    if(hasPath(graph,neighbor,dst)===true){
      return true;
    }
  }
  return false;
};
*/
//* Iterative
const hasPath = (graph, src, dst) => {
  let queue = [src];

  while (queue.length > 0) {
    let current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
  queue.push(neighbor)
    }
  }
  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph, "f", "k"));
