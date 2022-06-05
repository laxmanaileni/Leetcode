var calPoints = function (ops) {
  let res = [],
    sum = 0;
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "+") {
      let len = res.length;
      res.push(res[len - 1] + res[len - 2]);
    } else if (ops[i] === "D") {
      let len = res.length;
      res.push(2 * res[len - 1]);
    } else if (ops[i] === "C") {
      res.pop();
    } else {
      res.push(parseInt(ops[i]));
    }
  }
  // console.log(res)
  for (let i = 0; i < res.length; i++) {
    sum += res[i];
  }
  return sum;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
