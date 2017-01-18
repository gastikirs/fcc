//Everything Be True
/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.*/


function truthCheck(collection, pre) {
  // Is everyone being true?
  var matches = 0;

  function testValue(value){
    var wrongVals = [undefined, NaN, null, '', 0];
    var i = 0;
    
    while(wrongVals[i] !== value && i < wrongVals.length){
      i++;
    }
    if(i == wrongVals.length && !Number.isNaN(value)){
      return true;
    } else return false;
  }  
  
  for(var i = 0; i < collection.length ; i++){
    if(collection[i].hasOwnProperty(pre)){
      var aux = collection[i][pre];

      if(testValue(aux)){
        matches++;       
      }
    }
  }

  if(matches==collection.length){
    return true;
  } else return false;
  
  
  
}

truthCheck([{"single": "double"}, 
            {"single": NaN}], 
             "single")