// https://leetcode.com/problems/01-matrix/

var updateMatrix = function (mat) {
  let result = Array(mat.length)
    .fill()
    .map(() => Array(mat[0].length).fill(0));

  let visited = new Set();

  const dfs = (mat, row, col, visited) => {
    let rowInbounds = row >= 0 && row < mat.length;
    let colInbounds = col >= 0 && col < mat[0].length;

    if (!(rowInbounds && colInbounds)) return 100000;
    let pos = row + "," + col;
    if (visited[pos]) return 100000;
    if (mat[row][col] === 0) return 0;
    visited[pos] = true;
    let val =
      1 +
      Math.min(
        Math.min(
          dfs(mat, row + 1, col, visited),
          dfs(mat, row - 1, col, visited)
        ),
        Math.min(
          dfs(mat, row, col + 1, visited),
          dfs(mat, row, col - 1, visited)
        )
      );
    visited[pos] = false;
    return val;
  };

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] > 0) {
        result[i][j] = dfs(mat, i, j, visited);
      }else{
        let pos = row + "," + col;
        visited[pos] = true;
      }
    }
  }
  return result;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
