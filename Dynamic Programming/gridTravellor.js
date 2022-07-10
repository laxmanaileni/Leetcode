/* Recursion
const gridTravellor=(m,n)=>{

    if(m===1 && n===1)return 1;
    if(m===0 || n===0) return 0;

    return gridTravellor(m-1,n)+gridTravellor(m,n-1)

}
*/

// Dynamic Programming

const gridTravellor = (m, n, memo = {}) => {
  if ([m, n] in memo) return memo[[m, n]];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[[m, n]] = gridTravellor(m - 1, n, memo) + gridTravellor(m, n - 1, memo);
  return memo[[m, n]];
};

console.log(gridTravellor(1, 1)); //1
console.log(gridTravellor(2, 3)); //3
console.log(gridTravellor(3, 2)); //3
console.log(gridTravellor(3, 3)); //6
console.log(gridTravellor(18, 18)); //2333606220
console.log(gridTravellor(3, 7)); //28
