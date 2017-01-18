//Repeat a string repeat a string
//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


function repeatStringNumTimes(str, num) {
  // repeat after me
  var aux = [null];
  if(num >= 0){

    for(var i = 0; i < num; i++){
      aux[i] = str;
    }

    return aux.join('');
  } else return '';
}

repeatStringNumTimes("a", 3);

