var diStringMatch = function (s) {
  let max = s.length;
  let min = 0;
  let result = [];
  for (let i = 0; i <=s.length; i++) {
    if (s[i] === "I") {
      result.push(min);
      min++;
    } else {
      result.push(max);
      max--;
    }
  }
  return result;
};

console.log(diStringMatch("IDID"));//[0,4,1,3,2]
console.log(diStringMatch("III"));//[0,1,2,3]
console.log(diStringMatch("DDI"));//[3,2,0,1]
