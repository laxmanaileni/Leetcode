//* BackTracking
/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

const exist = (board, word) => {
  //check if board is not null

  if (board.length === 0) return false;

  let rows = board.length;
  let columns = board[0].length;

  let directions = [
    [-1, 0], //DOWN
    [1, 0], //UP
    [0, 1], //RIGHT
    [0, -1], //LEFT
  ];

  const dfs = (x, y, index) => {
    //If the board char is empty
    if (board[x][y] !== word[index]) return false;
    //if the index reaches to the last index of word
    if (index === word.length - 1) return true;
    board[x][y] = "*";

    //Walk through all the directions

    for (let [dx, dy] of directions) {
      let i = x + dx,
        j = y + dy;
      // i should be in between 0 ----> rows and j should be in between 0 ----> columns
      if (i >= 0 && i < rows && j >= 0 && j < columns) {
        if (dfs(i, j, index + 1)) {
          return true;
        }
      }
    }
    board[x][y] = word[index];
    return false;
  };

  // Iterate rows and columns into dfs
  for (let i = 0; i < rows; i++) {
    for (j = 0; j < columns; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); //true

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
); //true

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
