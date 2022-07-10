class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var isHappy = function (n) {
  let slow = n;
  let fast = n;
  while (true) {
    slow = square(slow);
    fast = square(square(fast));
    if (slow === fast) {
      break;
    }
  }

  return slow === 1;
};

const square = (n) => {
  let sum = 0;
  while (n > 0) {
    digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
};

console.log(isHappy(19)); //true
console.log(isHappy(23)); //True
console.log(isHappy(12)); //false
console.log(isHappy(2)); //false
