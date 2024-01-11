/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function reverse(str){
  var str1=str.split("");
  str1.reverse();
  var reversed=str1.join("");
  return reversed;
}
function removespace(str){
  var strr2 = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); 
  var lowered=strr2.toLowerCase();
  var spaceremoved=lowered.replace(/\s/g, '') 
  return spaceremoved;

}
function isPalindrome(str) {
  var strr=removespace(str);
  
  if(strr==reverse(strr)){
    return true;
  }
  return false;
}
// console.log(reverse("Eva, can I see bees in a cave?"));

console.log(isPalindrome("Eva, can I see bees in a cave?"));

module.exports = isPalindrome;
