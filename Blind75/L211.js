/**Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 */

var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  word.split("").forEach((char) => {
    if (!node[char]) node[char] = {};
    node = node[char];
  });
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const traverse = (node, i) => {
    const char = word[i];

    // reached end of word, check if word exists
    if (i === word.length) return node.isEnd || false;

    // if wildcard, iterate every possible keys and check if word exists
    // if valid char exist, recursively check if other characters of the word exist
    // else return false
    if (char == ".") {
      for (const key in node) {
        if (traverse(node[key], i + 1)) return true;
      }
    } else if (node[char]) return traverse(node[char], i + 1);

    return false;
  };

  return traverse(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
