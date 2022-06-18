var divideArray = function(nums) {
    if(nums.length%2!==0)return false;
    let map={}
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]!==undefined){
            map[nums[i]]++;
        }else{
            map[nums[i]]=1;
        }
    }
   
    let res=Object.values(map)
    // console.log(res)
    for(let i=0;i<res.length;i++){
        if(res[i]%2!==0){
            return false
        }
    }
    return true;
};