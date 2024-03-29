//* Whether the path exists between nodeA and nodeB
const undirectedGraph = (edges, nodeA, nodeB) => {
  //* Build a Graph using edges
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

//*Check the path between src to dst and avoid cycles
const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
};

//*Build a graph
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
  /*{
  i: [ 'j', 'k' ],
  j: [ 'i' ],
  k: [ 'i', 'm', 'l' ],
  m: [ 'k' ],
  l: [ 'k' ],
  o: [ 'n' ],
  n: [ 'o' ]
} */
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedGraph(edges, "j", "m")); //true
