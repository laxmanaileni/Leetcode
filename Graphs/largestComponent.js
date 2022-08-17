//number of nodes of a component to find out the largest component
//Time O(e) Space O(n)
// Go through each node and traverse through each node to their neightbours and mark them as visited so that we wont traverse again and again.
const largestComponent = (graph) => {
  let visited = new Set(); // O(1) lookup and insertion
  let largest = 0;
  for (let node in graph) {
    const count = search(graph, node, visited);
    if (count > largest) largest = count;
  }
  return largest;
};

const search = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));
  let count = 1;
  for (let neighbor of graph[node]) {
    count += search(graph, neighbor, visited);
  }
  return count;
};

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};
console.log(largestComponent(graph)); //4
