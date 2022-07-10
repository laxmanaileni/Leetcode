const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      //Check the start letter of target and word
      let suffix = target.slice(word.length); // deduct the target with the word and assign the target
      let suffixWays = allConstruct(suffix, wordBank); // number of ways getting the word // we get subarrays as output of 2D array //Recursion occurs untill the base case
      let targetWays = suffixWays.map((way) => [word, ...way]); //Taking the subarray and add the word at first index
      result.push(...targetWays); // Push the combined target arrays to result
    }
  }
  return result;
};

// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //[ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
// console.log(
//   allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
//   /*[
//   [ 'ab', 'cd', 'ef' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abc', 'def' ],
//   [ 'abcd', 'ef' ]
// ] */
// );
// console.log(
//   allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) //[]
// );
// console.log(
//   allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
//   /**[
//   [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
//   [
//     'enter', 'a',
//     'p',     'ot',
//     'ent',   'p',
//     'o',     't'
//   ],
//   [
//     'enter', 'a',
//     'p',     'o',
//     't',     'ent',
//     'p',     'ot'
//   ],
//   [
//     'enter', 'a',
//     'p',     'o',
//     't',     'ent',
//     'p',     'o',
//     't'
//   ]
// ] */
// );
// console.log(
//   allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ]) //[]

// );

const allConstructDP = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      //Check the start letter of target and word
      let suffix = target.slice(word.length); // deduct the target with the word and assign the target
      let suffixWays = allConstructDP(suffix, wordBank, memo); // number of ways getting the word // we get subarrays as output of 2D array //Recursion occurs untill the base case
      let targetWays = suffixWays.map((way) => [word, ...way]); //Taking the subarray and add the word at first index
      result.push(...targetWays); // Push the combined target arrays to result
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstructDP("purple", ["purp", "p", "ur", "le", "purpl"])); //[ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(
  allConstructDP("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
  /*[
    [ 'ab', 'cd', 'ef' ],
    [ 'ab', 'c', 'def' ],
    [ 'abc', 'def' ],
    [ 'abcd', 'ef' ]
  ] */
);
console.log(
  allConstructDP("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) //[]
);
console.log(
  allConstructDP("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
  /**[
    [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
    [
      'enter', 'a',
      'p',     'ot',
      'ent',   'p',
      'o',     't'
    ],
    [
      'enter', 'a',
      'p',     'o',
      't',     'ent',
      'p',     'ot'
    ],
    [
      'enter', 'a',
      'p',     'o',
      't',     'ent',
      'p',     'o',
      't'
    ]
  ] */
);
console.log(
  allConstructDP("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]) //[]
);
