//Roman Numeral Converter 

/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/


function convertToRoman(num) {
  
  var result = [];
  // M 1000
  // D 500
  // C 100
  // L 50
  // X 10
  // V 5
  // I 1
 
  while(num>=1000){
    result.push('M');
    num -= 1000;    
  }
  
  if(num>=900){
    result.push('CM');
    num-=900;
  }
 
  if(num>=500){
    result.push('D');
    num -= 500;
  }

  if(num>=400){
    result.push('CD');
    num -= 400;
  } else while(num>=100){
    result.push('C');
    num -= 100;
  }
  if(num>=90){
    result.push('XC');
    num-=90;
  }
  if(num>=50){
    result.push('L');
    num-=50;
  } else if(num>=40){
    result.push('XL');
    num-= 40;
  }
  
  while(num>=10){
    result.push('X');
    num-=10;
  }
  
  if(num>=9){
    result.push('IX')
    num-=9;
   }
  
  if(num>=5){
    result.push('V');
    num-=5;
  }
  if(num>=4){
    result.push('IV');
    num-=4;
  }
  while(num>=1){
    result.push('I');
    num-=1;
  }
 
  
  
  

  //3479
  //479
  //MMMCD
  
  
 return result.join('');
}

convertToRoman(3999);
