//Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  var exp = /\s|_/g;  

  var addSpace = /([a-z])([A-Z])/g;
  
  var result = str.replace(addSpace, '\$1-\$2');
  result = result.replace(exp, '-');
  
  return result.toLowerCase();
}

spinalCase("This Is Spinal Tap");