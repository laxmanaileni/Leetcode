//https://leetcode.com/problems/number-of-islands/

var numIslands = function (grid) {
  if (grid.length === 0) return 0;

  let visited = new Set();
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (explore(grid, i, j, visited) === true) count += 1;
    }
  }
  return count;
};

const explore = (grid, row, col, visited) => {
  let rowInbounds = row >= 0 && row < grid.length;
  let colInbounds = col >= 0 && col < grid[0].length;

  if (!(rowInbounds && colInbounds)) return false;

  if (grid[row][col] === "0") return false;

  let pos = row + "," + col;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);
  return true;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
