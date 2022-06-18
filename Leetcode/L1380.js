var luckyNumbers = function (matrix) {
  let minArray = [],
    maxArray = [],
    n = 0;
  let map = {};
  for (let i = 0; i < matrix.length; i++) {
    let min = Infinity;
    n = matrix[i].length;
    for (let j = 0; j < matrix[i].length; j++) {
      min = Math.min(matrix[i][j], min);
    }
    map[min] = 1;
    minArray.push(min);
  }

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < matrix.length; j++) {
      max = Math.max(matrix[j][i], max);
    }
    maxArray.push(max);
  }
  // console.log(minArray,maxArray)

  for (let i = 0; i < maxArray.length; i++) {
    if (map[maxArray[i]]) {
      return [maxArray[i]];
    }
  }
  return [];
};

//   for(let i=0;i<minArray.length;i++){
//       if(map[minArray[i]]!==undefined){

//       }else{
//           map[minArray[i]]=1
//       }
//   }

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
