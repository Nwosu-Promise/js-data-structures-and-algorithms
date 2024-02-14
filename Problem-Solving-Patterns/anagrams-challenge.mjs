// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a AudioWorkletNode, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.

const validAnagrams = (string1, string2) => {
  if(string1.length !== string2.length){
    return false
  }

  let freq1 = {}

  for (const val of string1) {
    freq1[val] = (freq1[val] || 0) + 1
  }
  

  for (const key of string2) {
    if(!freq1[key]) {
      return false;
    } else {
      freq1[key] -= 1
    }
  }
  return true;
}

const a = validAnagrams('', ''); //true
const b = validAnagrams('anagrams', 'nagarams'); // true
const c = validAnagrams('aaz', 'zza') // false
const d = validAnagrams('rat', 'tara') // false

console.log({ a, b, c, d});

