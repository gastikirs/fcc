//Sorted Union

/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.*/


function uniteUnique(arr) {
  
  var cantArrays = arguments.length;
  
  var test = [];
  
  for(var i = 0 ; i < cantArrays; i++){
    for(var j = 0; j < arguments[i].length ; j++){
      test.push(arguments[i][j]);
    }
  }
  
  var result = test.filter(deleteDuplicate);
  
  function deleteDuplicate(value,index,array){
    return array.indexOf(value) == index;
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
