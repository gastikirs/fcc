//Find the Longest Word in a String

function findLongestWord(str) {
  
  var aux;
  var max = 0;
  
  var cant = str.split(" ");
  for(var i = 0 ; i<cant.length; i++){
    if(cant[i].length > max){
      max = cant[i].length;
    }
  }

  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
