var calculateTax = function (brackets, income) {
  if (brackets.length === 1 || income < brackets[0][0]) {
    if (income < brackets[0][0]) {
      return (income * brackets[0][1]) / 100;
    } else {
      return (brackets[0][0] * brackets[0][1]) / 100;
    }
  }
  if (income <= 0) return 0;
  let tax = 0,
    prev = 0,
    c = false;
  //console.log(brackets.length);
  for (let i = 0; i < brackets.length; i++) {
    sum = brackets[i][0] - prev;

    if (brackets[i][0] > income) {
      sum = income - prev;
      c = true;
    }
    //  console.log(sum);
    tax = tax + (sum * brackets[i][1]) / 100;
    if (c === true) {
      return tax;
    }
    prev = brackets[i][0];
  }
  return tax;
};

// console.log(
//   calculateTax(
//     [
//       [3, 50],
//       [7, 10],
//       [12, 25],
//     ],
//     10
//   )
// );
// console.log(
//   calculateTax(
//     [
//       [1, 0],
//       [4, 25],
//       [5, 50],
//     ],
//     2
//   )
// );

// console.log(calculateTax([[2, 50]], 0));
console.log(calculateTax([[10, 10]], 5));
console.log(
  calculateTax(
    [
      [4, 8],
      [5, 49],
    ],
    2
  )
);
//[[4,8],[5,49]],2
