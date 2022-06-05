var mostFrequent = function (nums, key) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === key) {
        if (map[nums[i + 1]] !== undefined) {
          map[nums[i + 1]]++;
        } else {
          map[nums[i + 1]] = 1;
        }
      }
    }
    let maximum=Math.max(...Object.values(map))
   
    for(let i=0;i<Object.keys(map).length;i++){
        if(Object.values(map)[i]===maximum){
            return Object.keys(map)[i]
        }
    }
};

console.log(mostFrequent([1, 100, 200, 1, 100], 1));
