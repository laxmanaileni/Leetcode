const searchBitonicArray = (arr, key) => {
  //not solved
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};

console.log(searchBitonicArray([1, 3, 8, 12], 12));
console.log(searchBitonicArray([1, 3, 8, 4, 3], 4));
