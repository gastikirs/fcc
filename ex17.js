//Sum All Numbers in a Range
/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/


function sumAll(arr) {
  var n1 = arr[0];
  var n2 = arr[1];
  
  var min = Math.min(n1,n2);
  var max = Math.max(n1,n2);
  var newArr = [];
  
  for(var i = min ; i<=max; i++){
    newArr.push(i);
  }
  
  var result = newArr.reduce(sum); 
  
  return result;
  
  function sum(total, num){
    return total + num;
  }
  
  
  
}

sumAll([1, 4]);
