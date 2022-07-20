//* Iterative
const depthFirstTraversal = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current);
    for (let neightbor of graph[current]) {
      stack.push(neightbor);
    }
  }
};

//* Recursive

const DFTRecursive = (graph, source) => {
  console.log(source);
  for (let neightbor of graph[source]) {
    DFTRecursive(graph, neightbor);
  }
};

//*Breadth First Traversal
const breadthFirstTraversal = (graph, source) => {
  let queue = [source];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);
    for (let neightbor of graph[current]) {
      queue.push(neightbor);
    }
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log(depthFirstTraversal(graph, "a")); //abdfce
console.log(DFTRecursive(graph, "a")); //abdfce

console.log(breadthFirstTraversal(graph, "a")); //abdfce
