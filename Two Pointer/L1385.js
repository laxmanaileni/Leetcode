var findTheDistanceValue = function (arr1, arr2, d) { // Stupid Question No question clarity
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
 //*arr1=[ 1, 2, 3, 100 ] arr2=[ -5, -3, -2, 7, 10 ]

};

// console.log(findTheDistanceValue([4,5,8],[10,9,1,8],2))
// console.log(findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30],3))
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));
