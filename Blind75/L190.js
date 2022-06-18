var reverseBits = function (n) {
  let x = n.toString(2);
  let res = [];
  let len = x.length - 1;
  for (let i = 0; i < x.length; i++) {
    res.push(x[len - i]);
  }
  for (let i = x.length; i < 32; i++) {
    res.push(0);
  }
  let j = res.join("");
  return parseInt(j.toString(), 2);
};

console.log(reverseBits(43261596)); //964176192
console.log(reverseBits(4294967293)); //3221225471
