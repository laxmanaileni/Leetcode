var islandPerimeter = function (grid) {
  let count = 0;

  const explore = (row, col) => {
    let rowInbounds = row >= 0 && row < grid.length;
    let colInbounds = col >= 0 && col < grid[0].length;
    if (!(rowInbounds && colInbounds) || grid[row][col] === 0) {
      count++;
      return;
    }
    if (grid[row][col] === 2) return;
    grid[row][col] = 2;
    explore(row - 1, col);
    explore(row + 1, col);
    explore(row, col - 1);
    explore(row, col + 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        explore(i, j);
      }
    }
  }

  return count;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
