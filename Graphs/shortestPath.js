/** Time O(e) Space O(n)
 *  //*Shortest Path
 edges:[
    [w,x],
    [x,y],
    [z,y],
    [z,v],
    [w,v],
 ]
//* Build a Graph from the edges
// Use the BFS along with storing the distance in the queue
 */

const ShortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  let visited = new Set([nodeA]);
  let queue = [[nodeA, 0]];

  while (queue.length > 0) {
    let [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]); //Storing the node and distance in the queue
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge; // unpack the edge
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b); // Undirected so both ways
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(ShortestPath(edges, "w", "z")); //2

/*Graph
{
  w: [ 'x', 'v' ],
  x: [ 'w', 'y' ],
  y: [ 'x', 'z' ],
  z: [ 'y', 'v' ],
  v: [ 'z', 'w' ]
}
*/
