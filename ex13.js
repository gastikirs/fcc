//Seek and Destroy
/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/


function destroyer(arr) {
  // Remove all the values
  var rules = [];
  for(var i = 1; i < arguments.length; i++){
    rules.push(arguments[i]);
  }
  
    function checker(value, index, array){
      var flag = true;
      var j = 0;
      
     for(var j = 0; j<rules.length; j++){
        if(value == rules[j]){
          flag = false;
        }
      }
      return flag;
  }
  
  
    return arr.filter(checker);
  }
  


destroyer([1, 2, 3, 1, 2, 3], 5, 3);
