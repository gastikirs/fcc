//Falsy bouncer

//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var result = [];
  var index=0;
  var aux;
  for(var i = 0; i < arr.length ; i++){
    aux = Boolean(arr[i]);

    if(aux === true){
      result[index] = arr[i];
      index++;
    }
  }
 
  return result;
  

}



bouncer([1, null, NaN, 2, undefined, ""]);
