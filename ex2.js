//Factorialize a Number

function factorialize(num) {
  var aux = 1;
  for(var i = 1 ; i <= num; i++){
    aux = aux * i;
  }
  return aux;
}

factorialize(5);