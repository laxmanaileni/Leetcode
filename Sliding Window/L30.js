//*TODO Tough revise once again
var findSubstring = function (s, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  let wordFreq = {};

  for (let word of words) {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  }
  //console.log(wordFreq) //{ foo: 1, bar: 1 }

  const resultIndices = [],
    wordsCount = words.length,
    wordLength = words[0].length;
  let len = wordsCount * wordLength;
  let word;
  for (let i = 0; i < s.length - len + 1; i++) {
    const wordsSeen = {};

    for (let j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
      word = s.substring(next_word_index, next_word_index + wordLength); // get the word from s string

      if (!(word in wordFreq)) {
        //If not in wordfreq then break it
        break;
      }

      // Check in wordsSeen or not is not add one
      if (!(word in wordsSeen)) {
        // console.log("hi")
        wordsSeen[word] = 0;
      }

      wordsSeen[word] += 1;

      // Stop if it has higher frequency than required
      if (wordsSeen[word] > (wordFreq[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) {
        resultIndices.push(i);
      }
    }
  }
  return resultIndices;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
