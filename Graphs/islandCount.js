/* Number of Islands */
/*
Run a nested for loop and if you find land then traverse all direction by making note of visited nodes
Time=O(rows*col)=Space
*/

const islandCount = (grid) => {
  let visited = new Set();
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (explore(grid, i, j, visited)) count += 1; //If I get true I increment count
    }
  }
  return count;
};

const explore = (grid, row, col, visited) => {
  //*Checking the row and col is not out of bounds
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid.length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[row][col] === "W") return false; // No need of Water for us

  let pos = row + "," + col;
  if (visited.has(pos)) return false;
  
  visited.add(pos);

  //* Go for 4 directions from the position
  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);

  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); //3
