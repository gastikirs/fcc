//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  return newArr.filter(function(value, index, arr){
    if(arr.slice(index+1).indexOf(value) == -1 && arr.slice(0,index).indexOf(value) == -1){
      return value;
    }
  });
  
  
  
  // Same, same; but different.
}
                //[1,2,3,5,1,2,3,4,5]

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
