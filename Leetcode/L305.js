//Not solved

var numIslands2 = function (m, n, positions) {
    const grid = Array(m)
      .fill(0)
      .map(() => Array(n).fill(0));
  
    let count = 0,
      result = [];
  
    for (let i = 0; i < positions.length; i++) {
      let [a, b] = positions[i];
      grid[a][b] = 1;
      //console.log(grid)
      count = addLand(grid);
      result.push(count);
    }
  
    return result;
  };
  
  const addLand = (grid) => {
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
    const colInBounds = 0 <= col && col < grid[0].length;
    if (!rowInBounds || !colInBounds) return false;
  
    if (grid[row][col] === 0) return false; // No need of Water for us
  
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
  
  // console.log(
  //   numIslands2(3, 3, [
  //     [0, 0],
  //     [0, 1],
  //     [1, 2],
  //     [2, 1],
  //   ])
  // ); //[1,1,2,3]
  
  console.log(
    numIslands2(1, 2, [
      [0, 1],
      [0, 0],
    ])
  ); //[1,1]
  