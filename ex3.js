//Check for Palindromes

function palindrome(str) {
  // Good luck!
  var reg = /[\W_]/gi;
  str=str.replace(reg,"");
  var aux = str.split("").reverse().join("").toLowerCase();
  return aux === str.toLowerCase();
  
}

palindrome("A man, a plan, a canal. Panama");
