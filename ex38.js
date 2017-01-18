//Symmetric Difference 


/*Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).*/


function sym(args) {
  
  args = Array.prototype.slice.call(arguments);
  
  
  return args.reduce(function(actual, next){
    actual = removeDuplicate(actual);
    next = removeDuplicate(next);
    actual = diffArray(actual, next);
    return actual;
  });
  
  
  function removeDuplicate(arr){
    var result = [];
    arr.forEach(function(value) {
      if(result.indexOf(value) == -1){
        result.push(value);
      }
    });
    return result;
  }
  
  function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);

    return newArr.filter(function(value, index, arr){
      if(arr.slice(index+1).indexOf(value) == -1 && arr.slice(0,index).indexOf(value) == -1){
        return value;
      }
    });
  }
  
  
}


sym([1, 2, 3], [5, 2, 1, 4]);
