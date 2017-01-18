//Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // You can do this!
  var max = [null,null,null,null];
  
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length ; j++){
      if(arr[i][j] > max[i]){
        max[i] = arr[i][j];
      }
    }
  }
  
  return max;
}

largestOfFour([[-1212, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
