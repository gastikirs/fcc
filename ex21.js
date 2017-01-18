//Pig Latin
//Pig Latin
/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.*/


function translatePigLatin(str) {
  
  var ending = 'ay';
  
  var vowels = ['a','e','i','o','u'];
  
  var word = str.split('');
 
  var cant = 0;
function vowelCheck(char) {
  return (/^[aeiou]$/i).test(char);
}
  
  while(!vowelCheck(word[0])){
    aux = word.shift();
    word.push(aux);    
    cant++;    
    vowelCheck(word[0]);

  }
  
  if(cant == 0){
    ending = 'way';
  }
  return word.join('') + ending;

  
}

translatePigLatin("algorithm");
