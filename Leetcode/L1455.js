var isPrefixOfWord = function (sentence, searchWord) {
  let words = [];
  words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let lettercount = 0;
    for (let j = 0; j < Math.min(words[i].length,searchWord.length); j++) {
      if (words[i][j] === searchWord[j]) {
        lettercount++;
      }
    }
    if (lettercount === searchWord.length) {
      return i+1;
    }
  }
  return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg"));
