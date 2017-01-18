//Wherefore art thou

/*Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.*/


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

 // return collection[0][Object.keys(source)[0]] == source[Object.keys(source)[0]];
  
  if(Object.keys(source).length > 1){
  
    
    for(var j = 0; j < collection.length ; j++){
      if(collection[j][Object.keys(source)[0]] == source[Object.keys(source)[0]]){
        if(collection[j][Object.keys(source)[1]] == source[Object.keys(source)[1]]){
          arr.push(collection[j]);
        }
      }
     }
      
    
    
  } else {
      for(var i = 0; i < collection.length; i++){
   var aux = source[Object.keys(source)];
    
    if(collection[i][Object.keys(source)] == aux){
      arr.push(collection[i]);
    }    
  }
  }
  
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 },
               { "a": 1 },
               { "a": 1, "b": 2, "c": 2 }],
              
              { "a": 1, "b": 2 }) 