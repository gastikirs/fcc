//DNA Pairing

/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/


function pairElement(str) {

  //Pares: C: CG
  //       A: AT
  //       G: GC
  //       T: TA
  
  var pairs = {'C': ['C','G'],
               'A': ['A', 'T'], 
               'G': ['G','C'], 
               'T': ['T','A'] 
              };
  
  var chars = str.split('');
  
  
  var rta = [];
    
  for(var i = 0; i < chars.length ; i++){
    rta.push(pairs[chars[i]]);  
  }
  
  
  
  return rta;
}

pairElement("ATCGA");
