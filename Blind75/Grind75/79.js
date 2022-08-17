//https://leetcode.com/problems/word-search/
const exist = (board, word) => {
    if (board.length === 0) return false;
    let dir = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const dfs = (row, col, index) => {
      if (board[row][col] !== word[index]) return false;
      if (index === word.length - 1) return true;
      board[row][col] = "*";
  
      for (let [dx, dy] of dir) {
        let x = row + dx,
          y = col + dy;
        if (
          x >= 0 &&
          x <= board.length - 1 &&
          y >= 0 &&
          y <= board[0].length - 1
        ) {
          if (dfs(x, y, index + 1)) return true;
        }
      }
      board[row][col] = word[index];
      return false;
    };
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; i < board[0].length; j++) {
        if (dfs(i, j, 0)) return true;
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
  );
  