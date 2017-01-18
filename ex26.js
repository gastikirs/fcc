//Convert HTML Entities
/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/


function convertHTML(str) {
  // &colon;&rpar;
  var reExp = /[&><'"]/g;
  
  var changes = {'&':'&amp;', 
                 '<' : '&lt;', 
                 '>' : '&gt;',
                 "'" : '&apos;',
                 '"' : '&quot;'
                };
  
  var cantMatches;
      
  if(str.match(reExp)){
    cantMatches = str.match(reExp).length;
  } else cantMatches = 0;
  
  var result = str;

  if(cantMatches !== 0){
  for (var i = 0; i < cantMatches ; i++){
    result = result.replace(str.match(reExp)[i],changes[str.match(reExp)[i]]);
  }
}


  return result;
}


convertHTML('Stuff in "quotation marks"');