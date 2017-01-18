//Drop it
/*Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.*/


function dropElements(arr, func) {
  // Drop them elements.
  var flag = true;
  var begg = null;
  for(var i = 0; i < arr.length ; i++){
   if(func(arr[i]) && flag){
     begg = i;
     flag = false;
   }
  }
  if(begg!==null){
    return arr.slice(begg);
  } else return [];
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});