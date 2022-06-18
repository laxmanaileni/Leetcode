var numDifferentIntegers = function (word) {//not solved
  let set = {},
    map = {};
  for (let i = 0; i < 10; i++) {
    set[i] = 1;
  }
  // console.log(set);
  let res = [],
    result = [];
  for (let i = 0; i <= word.length; i++) {
    if (set[word[i]] !== undefined) {
      res.push(word[i]);
    } else {
      if (i !== 0) {
        let x =parseInt(res.join("")) ;
        console.log(x)
        if (  map[x] === undefined ) {
          map[x] = 1;
          result.push(x);
          res = [];
        }
        x=0
      }
    }
  }
  console.log(result);
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i]) {
      count++;
    }
  }
  return count;
};

console.log(numDifferentIntegers("a123bc34d8ef34"));
console.log(numDifferentIntegers("leet1234code234"));
console.log(numDifferentIntegers("a1b01c001"));