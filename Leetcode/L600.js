var findIntegers = function(n) {//Unsolved
    let count=0;
    for(let i=0;i<=n;i++){
        let x=i.toString(2).split('')
        let s=1;
       // console.log(x)
        if(x.length>1){
            x.map(m=> s= s*m*1)
        }else{
            s=0;
        }
      if(s===0){
        count++;
      }
        // array.push();
   
    }
  //  console.log(count)
    return count;
   // console.log(array)
//   for(let i=0;i<array.length;i++){
//     let x=array[i]
//     console.log(x)
//   }
};
/**
 * 
[ '0' ]
[ '1' ]
[ '1', '1' ]
[ '1', '0', '0' ]
[ '1', '0', '1' ]
['1','1','0']
 */

// console.log(findIntegers(5))
// console.log(findIntegers(1))
// console.log(findIntegers(2))
console.log(findIntegers(2))