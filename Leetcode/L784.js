var letterCasePermutation = function (s) {
  let permutations = [];
  permutations.push(s);
  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i], 10))) {
      const n = permutations.length;
      for (let j = 0; j < n; j++) {
        const chs = permutations[j].split("");
        if (chs[i] === chs[i].toLowerCase()) {
          chs[i] = chs[i].toUpperCase();
        } else {
          chs[i] = chs[i].toLowerCase();
        }
        permutations.push(chs.join(""));
      }
    }
  }
  return permutations;
};

console.log(letterCasePermutation("a1b2"));
