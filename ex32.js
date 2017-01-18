//Steamroller 

//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
    for(var j = 0; j < arr[i].length; j++){
      if(Array.isArray(arr[i][j])){
        for(var x = 0; x < arr[i][j].length; x++){
          if(Array.isArray(arr[i][j][x])){
           for(var z = 0; z < arr[i][j][x].length; z++){
             result.push(arr[i][j][x][z]);
           } 
          } else {
          result.push(arr[i][j][x]);
        }
       }  
      } else {
      result.push(arr[i][j]);  
      }
    } } else {
      result.push(arr[i]);
   }
  }
  return result;
}  
  //arr[0] = 
steamrollArray([1, {}, [3, [[4]]]]);