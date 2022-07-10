const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    //Check if the first index of  word is same as target
    if (target.indexOf(word) === 0) {
      //slice the target upto the word length as it remains same in the target
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }
  return false;
};

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
// console.log(
//   canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) //false
// );
// console.log(
//   canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) //true
// );
// console.log(
//   canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ]) //false
// );

const canConstructDP = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      if (canConstructDP(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstructDP("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(
  canConstructDP("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) //false
);
console.log(
  canConstructDP("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) //true
);
console.log(
  canConstructDP("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]) //false
);
