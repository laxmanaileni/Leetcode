//https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
let map={};

for(let i=0;i<nums.length;i++){
    if(map[nums[i]]===undefined)map[nums[i]]=0;
    map[nums[i]]++;
}
return Object.entries(map).sort((a,b)=>b[1]-a[1])[0][0]
}

console.log(majorityElement([2,2,1,1,1,2,2]))