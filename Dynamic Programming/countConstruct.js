const countConstruct = (target, wordBank) => {
  if (target === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      let numways = countConstruct(suffix, wordBank);
      count += numways;
    }
  }
  return count;
};
// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
// console.log(
//   countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) //false
// );
// console.log(
//   countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) //true
// );
// console.log(
//   countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ]) //false
// );

const countConstructDP = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      let numways = countConstructDP(suffix, wordBank, memo);
      count += numways;
    }
  }
  memo[target] = count;
  return count;
};
console.log(countConstructDP("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstructDP("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(
  countConstructDP("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) //0
);
console.log(
  countConstructDP("enterapotentpot", [
    "a",
    "p",
    "ent",
    "enter",
    "ot",
    "o",
    "t",
  ]) //4
);
console.log(
  countConstructDP("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]) //0
);
