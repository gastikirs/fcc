//Chunky Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var result = [];
  
  for(var i = 0 ; i < arr.length ; i+=size ){
    result.push(arr.slice(i,size+i));
  }

  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//This should return [["a", "b"], ["c", "d"]]
