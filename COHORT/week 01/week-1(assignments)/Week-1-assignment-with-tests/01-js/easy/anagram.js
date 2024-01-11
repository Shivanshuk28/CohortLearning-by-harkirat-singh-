/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str1){
var ans=str1.split("")
ans=ans.sort();
var sortedstring=ans.join("");
return sortedstring;
}

function isAnagram(str1, str2) {
  var lowerstr1=str1.toLowerCase();
  var lowerstr2=str2.toLowerCase();
  if(sort(lowerstr1)==sort(lowerstr2)){
    return true;
  }
  return false;
}

// const isAnagram = require('../easy/anagram');




console.log(isAnagram("bass","ssab"));
module.exports = isAnagram;