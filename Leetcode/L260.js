/* Method 1
var singleNumber = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      delete map[nums[i]];
    } else {
      map[nums[i]] = nums[i];
    }
  }
  return Object.values(map);
};
*/

//Method 2

var singleNumber = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    x ^= nums[i]; //We get x means unique values xor
  }
  //console.log(x.toString(2));// 110 =6

  let MSB = x.toString(2).length - 1;
  //console.log(MSB &1); // 1 MSB=3
  let xor = nums
    .filter((num) => ((num >> MSB) & 1) == 0) //[ 1, 2, 1, 3, 2 ]
    .reduce((prev, curr) => prev ^ curr, 0);
  //console.log(xor); //3
  return [xor, xor ^ x];
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
