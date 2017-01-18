//Reverse the provided string

function reverseString(str) {
  var arr = str.split("");
  arr.reverse();
  arr = arr.join("");
  return arr;
}

reverseString("hello");