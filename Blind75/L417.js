var pacificAtlantic = function (heights) {
  let rows = heights.length;
  let cols = heights[0].length;
  let min = -Infinity,
    res = [];
  //*Initialize the atlantic and pacific with 2D with 0's
  let atlantic = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));
  let pacific = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));

  //* Start from Left and Right
  for (let row = 0; row < rows; row++) {
    dfs(heights, row, 0, min, pacific); //0,0//*Left
    //console.log(pacific);
    dfs(heights, row, heights[0].length - 1, min, atlantic); //0,4 //*Right
    // console.log(atlantic);
  }

  //* Start from Top and Bottom
  for (let col = 0; col < cols; col++) {
    dfs(heights, 0, col, min, pacific); //0,0 //*Top
    dfs(heights, heights.length - 1, col, min, atlantic); //4,0 //*Bottom
    //console.log(atlantic);
  }
  //*If both the atlantic and pacific is 1 then add row and col
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (atlantic[row][col] === 1 && pacific[row][col] === 1)
        res.push([row, col]);
    }
  }
  return res;
};
const dfs = (heights, row, col, prev, ocean) => {
  //* Row and col should be in bound
  if (
    row < 0 ||
    col < 0 ||
    row > heights.length - 1 ||
    col > heights[0].length - 1
  )
    return;
  //*Condition for the problem should be small than prev
  if (heights[row][col] < prev) return;
  if (ocean[row][col] === 1) return;
  //* Satisfied so store 1
  ocean[row][col] = 1;

  //* Go to Four directions
  dfs(heights, row - 1, col, heights[row][col], ocean);
  dfs(heights, row + 1, col, heights[row][col], ocean);
  dfs(heights, row, col - 1, heights[row][col], ocean);
  dfs(heights, row, col + 1, heights[row][col], ocean);
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
/*
[
  [ 0, 4 ], [ 1, 3 ],
  [ 1, 4 ], [ 2, 2 ],
  [ 3, 0 ], [ 3, 1 ],
  [ 4, 0 ]
]*/
