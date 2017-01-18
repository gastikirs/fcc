//Missing letters
/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/


function fearNotLetter(str) {
 
  var alphabet = ['a','b','c','d','e','f'];
  
  var newStr = [];
  
  for(var i = 0; i<str.length ; i++){
    newStr.push(str.charCodeAt(i));
  }
  
  var result = 'je';
  
  var j = 0;
  while(newStr[j]+1 == newStr[j+1]){
    j++;
  } if(j==newStr.length-1){
    result = undefined;
 } else result = String.fromCharCode(newStr[j]+1);
  
  return result;
    
}

fearNotLetter("abce");
