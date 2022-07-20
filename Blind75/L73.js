/*Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place. */

var setZeroes = function (matrix) {
  let track = [];
  //Keep track of [i,j] with 0 value
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) track.push([i, j]);
    }
  }

  //Update the corresponding row and columns to 0
  for (let i = 0; i < track.length; i++) {
    let [x, y] = track[i];

    for (let j = 0; j < matrix.length; j++) {
      matrix[j][y] = 0;
    }
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[x][j] = 0;
    }
  }
  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
//[[1,0,1],[0,0,0],[1,0,1]]
