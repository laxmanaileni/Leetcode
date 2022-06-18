var halvesAreAlike = function (s) {
  let length = s.length,
    firstVowel = 0,
    secondVowel = 0;
  let first = s.slice(0, length / 2);
  let second = s.slice(length / 2, length);
  for (let i = 0; i < first.length; i++) {
    if (
      first[i] === "a" ||
      first[i] === "e" ||
      first[i] === "i" ||
      first[i] === "o" ||
      first[i] === "u" ||
      first[i] === "A" ||
      first[i] === "E" ||
      first[i] === "I" ||
      first[i] === "O" ||
      first[i] === "U"
    ) {
      firstVowel++;
    }
    if (
      second[i] === "a" ||
      second[i] === "e" ||
      second[i] === "i" ||
      second[i] === "o" ||
      second[i] === "u" ||
      second[i] === "A" ||
      second[i] === "E" ||
      second[i] === "I" ||
      second[i] === "O" ||
      second[i] === "U"
    ) {
      secondVowel++;
    }
  }
  if (firstVowel === secondVowel) {
    return true;
  } else {
    return false;
  }
};

console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("textbook"));
