//https://leetcode.com/problems/word-ladder/

//Construct a adjacency list
//Write BFS to check the possibility

var ladderLength = function (beginWord, endWord, wordList) {
  let graph = {};
  let fullWordList = [beginWord, ...wordList];

  //Construct a adjacency list
  for (let word of fullWordList) {
    let arr = [];
    for (let otherWord of fullWordList) {
      if (word === otherWord) continue;
      let i = 0;
      let diff = 0;
      while (i < word.length || i < otherWord.length) {
        if (word[i] !== otherWord[i]) diff++;
        i += 1;
      }
      if (diff === 1) arr.push(otherWord);
    }
    graph[word] = arr;
  }
  //console.log(graph); This is the adjacency List

  //BFS
  let queue = [[beginWord, 1]];
  const visited = new Set();

  while (queue.length) {
    const [node, gen] = queue.shift();
    if (node === endWord) return gen;
    if (visited.has(node) || !graph[node]) continue;
    visited.add(node);
    // Add vertex of node to queue
    for (let vertex of graph[node]) {
      queue.push([vertex, gen + 1]);
    }
  }
  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);

/*adjacency List
  {
    hit: [ 'hot' ],
    hot: [ 'hit', 'dot', 'lot' ],
    dot: [ 'hot', 'dog', 'lot' ],
    dog: [ 'dot', 'log', 'cog' ],
    lot: [ 'hot', 'dot', 'log' ],
    log: [ 'dog', 'lot', 'cog' ],
    cog: [ 'dog', 'log' ]
  }
  */
