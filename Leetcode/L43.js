var multiply = function(num1, num2) {//not solved
    let number1=0,number2=0;
    
 let i=0;
    while(true){
        if(num1===`${i}`){
            number1=i;
        }
        if(num2===`${i}`){
            number2=i;
          }
          if(number1 && number2){
            return `${number1*number2}`
          }
      i++;
    }
       
   
};

console.log(multiply("2","3"))
console.log(multiply("123","456"))