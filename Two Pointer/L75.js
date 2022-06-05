const dutch_flag_sort = (array) => { //FlagProblem
  let low = 0,
    i = 0;
  high = array.length - 1;
  while (i <= high) {
    if (array[i] === 0) {
      [array[low], array[i]] = [array[i], array[low]];
      low++;
      i++;
    } else if (array[i] === 1) {
      i++;
    } else {
      [array[high], array[i]] = [array[i], array[high]];
      high--;
    }
  }
  return array;
};

console.log(dutch_flag_sort([1, 0, 2, 1, 0]));
console.log(dutch_flag_sort([2, 2, 0, 1, 2, 0]));
console.log(dutch_flag_sort([2, 0, 2, 1, 1, 0]));
console.log(dutch_flag_sort([2,0,1]));