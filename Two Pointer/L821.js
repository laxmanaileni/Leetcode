var shortestToChar = function (s, c) {             //not sloved
  let array = [];
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      array.push(i); //   console.log(array);
    }
  }
  let p = 0;

  for (let i = 0; i < s.length; i++) {
    if (array[p] === i) {
      result.push(0);
      p++;
      // continue;
    } else if (
      !p ||
      Math.abs(array[p + 1] - i) === Math.abs(array[p] - i) ||
      Math.abs(array[p + 1] - i) > Math.abs(array[p] - i)
    ) {
      result.push(Math.abs(array[p] - i));
    } else if( Math.abs(array[p - 1] - i) < Math.abs(array[p] - i)){
      console.log(array[p], i);
      result.push(Math.abs(array[p] - i));
    }
    //console.log(Math.abs(array[p + 1] - i));
  }

  return result;
};

console.log(shortestToChar("loveleetcode", "e"));
// console.log(shortestToChar("aaab", "b"));
