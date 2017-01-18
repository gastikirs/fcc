//Truncate a string
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {
  // Clear out that junk in your trunk
  var result;
 
  if(num <= 3){
    var str2 = str.slice(0,num);
    result = str2 + '...';
    
   } else if(num < str.length){
    var str3 = str.slice(0,num-3);
    result = str3 + '...';
   } else result = str;

  return result;
}


truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length);
