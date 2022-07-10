var addBinary = function (a, b) {
  const aBin = `0b${a}`; //0b11
  const bBin = `0b${b}`; //0b1
  //BigInt(aBin)    //3n
  //BigInt(bBin)    //1n
  const sum = BigInt(aBin) + BigInt(bBin);
  //  console.log(sum)//4n
  return sum.toString(2);
};

console.log(addBinary("11", "1"));
