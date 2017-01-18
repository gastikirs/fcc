//Sum All Odd Fibonacci Numbers 
/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.*/

function sumFibs(num) {
  
 var a = 0;
 var b = 1;
 var result = b;
 
 var finalSum = 1;
 for(var i = 2; i <= num; i++){
   result = a + b;
   if(isOdd(result) && result<= num){
     finalSum +=result;
   }
   
   a = b;
   b = result;
   
   
 }
  
  return finalSum;
 
  
  function isOdd(value){
    return value%2!==0;
  }
  
  
}

sumFibs(4);
