var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    let digit = i,
      sum = 0;
    while (digit > 0) {
      sum += digit % 10;
      digit = Math.floor(digit / 10);
    }
    // console.log(sum)
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countEven(30));
console.log(countEven(4));
