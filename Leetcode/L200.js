/**Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water. */


var numIslands = function (grid) {
  let visited = new Set();
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited) === true) count += 1; //If Island is found then increment
    }
  }
  return count;
};

const explore = (grid, row, col, visited) => {
  // Check for row and column is inbound or not
  if (!(row >= 0 && row < grid.length && col >= 0 && col < grid[0].length))
    return false;

  if (grid[row][col] === "0") return false; //Unwanted case

  let position = row + "," + col; //Storing it in this way because Set wont recoginse array as set while comparing again so convert it into string
  //To avoid or come out of the cyclic Graphs
  if (visited.has(position)) return false;
  visited.add(position);

  //Explore in all 4 directions
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
); //1

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); //3
