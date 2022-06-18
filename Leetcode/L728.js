var selfDividingNumbers = function (left, right) {
  //128
  let res = [];
  while (left <= right) {
    let number = left;
    if (left % 10 !== 0) {
      let c = 0,length= left.toString().length;
      while (length) {
          
        if(left % (number % 10) === 0){
            //console.log(left,number%10)
            c++;    
            number = Math.floor(number / 10);
        }else{
            length--
            continue
        }
       
        length--
      }
      if (c === left.toString().length) {
        res.push(left);
      }
    }
    left++;
  }
 return res
};

console.log(selfDividingNumbers(1, 22));
