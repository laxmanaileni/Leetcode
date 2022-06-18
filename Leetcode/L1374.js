var generateTheString = function (n) {
  let res = [];
  if (n === 1) return "a";
  if (n % 2 === 0) {
    res.push("b");
    for (let i = 0; i < n - 1; i++) {
      res.push("a");
    }
  } else {
    res.push("a");
    res.push("c");
    for (let i = 0; i < n - 2; i++) {
      res.push("b");
    }
  }
  return res.join("");
};

console.log(generateTheString(4));
