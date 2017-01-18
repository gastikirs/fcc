//Title Case a Sentence


function titleCase(str) {
  var aux = str.split(" ");
  var result = [];
  for(var i = 0 ; i<aux.length; i++){
    result[i] = aux[i].charAt(0).toUpperCase() + aux[i].slice(1).toLowerCase();
  }

  return result.join(" ");
}

titleCase("ShOrT AnD STouT");
