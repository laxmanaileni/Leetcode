/**Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word. */

//TODO
var findWords = function (board, words) {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let res = [];
  const buildTrie = () => {
    const root = {};
    for (let w of words) {
      let node = root;
      for (let c of w) {
        // Each char of words
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  };

  const search = (node, x, y) => {
    if (node.word != null) {
      res.push(node.word);
      node.word = null; // make sure only print one time for each word
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (node[board[x][y]] == null) return;

    let c = board[x][y];
    board[x][y] = "#"; //Visited

    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j);
    }
    board[x][y] = c; // Reset
  };

  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  return res;
};

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
);
