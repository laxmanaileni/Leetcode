//Happy Number
class Node {
  //Creation of Node
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var isHappy = function (n) {
  let slow = n,
    fast = n;

  while (true) {
    slow = findSquares(slow);
    fast = findSquares(findSquares(fast));
    if (slow === fast) {
      break;
    }
  }
  return slow === 1;
};

const findSquares = (n) => {
  let sum = 0;
  while (n > 0) {
    digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
};

console.log(isHappy(19));
console.log(isHappy(23));
console.log(isHappy(12));
console.log(isHappy(2));
/**true
true
false
false */
