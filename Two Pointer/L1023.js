var camelMatch = function (queries, pattern) { //not solved
  let i = 0;
  let result = [];
  let map = {};
  while (i < pattern.length) {
    if (map[pattern[i]]) {
      map[pattern[i]]++;
    } else {
      map[pattern[i]] = 1;
    }
    i++;
  }
  //console.log(map);
  let j = 0;

  while (j < queries.length) {
    let left = 0,
      count = pattern.length;
    right = queries[j].length;
    let set = map;
   // console.log(set)
    while (left < right) {
      if (set[queries[j][left]]) {
        count--;
        //console.log(queries[j][left])
        //delete set[queries[j][left]];
      }
      left++;
    }
    //console.log(count)
    if (!count) {
      result.push(true);
    } else {
      result.push(false);
    }
    j++;
  }
  return result;
};

// console.log(
//   camelMatch(
//     ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
//     "FB"
//   )
// );
console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FoBa"
  )
);
