var generateParenthesis = function (n) {
  let res = [""];

  while (res[0].length < n * 2) {
    let newRes = [];

    for (let i = 0; i < res.length; i++) {
      let left = 0;
      let right = 0;

      for (let j = 0; j < res[i].length; j++) {
        if (res[i][j] == "(") left++;
        else if (res[i][j] == ")") right++;
      }
      if (left == right) newRes.push(res[i] + "(");
      else if (left > right && left < n) {
        newRes.push(res[i] + "(");
        newRes.push(res[i] + ")");
      } else newRes.push(res[i] + ")");
    }
    res = newRes;
  }
  return res;
};
