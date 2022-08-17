//nested Loops and DFS
//Time O(row*col) Space
const minIsland = (grid) => {
  let smallest = Infinity;
  let visited = new Set();
  
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      const count = explore(grid, row, col, visited);
      if (count > 0 && count < smallest) smallest = count;
    }
  }
  if (smallest === Infinity) {
    return -1;
  }
  return smallest;
};

const explore = (grid, row, col, visited) => {
  let rowInBounds = row >= 0 && row < grid.length;
  let colInBounds = col >= 0 && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;

  if (grid[row][col] === "W") return 0;

  let pos = row + "," + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row, col - 1, visited);
  size += explore(grid, row, col + 1, visited);

  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];
console.log(minIsland(grid)); //2
