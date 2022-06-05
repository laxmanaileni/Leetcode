var smallestEqual = function(nums) {
    let minIndex=Infinity
    for(let i=0;i<nums.length;i++){
        if(i%10===nums[i]){
            minIndex=Math.min(minIndex,i)
        }
    }
    if(minIndex===Infinity){
        return -1
    }
    return minIndex;
};