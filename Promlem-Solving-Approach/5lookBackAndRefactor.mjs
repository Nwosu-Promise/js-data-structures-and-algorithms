// write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char =  str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      if(result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1 
      }
    }
  }
  return result;
    // if the char is a number/letter and is a key in object, add one to count
    // if the char is a number/letter and not in object, add it and set value to 1
    // if the chat is something else(space, period, etc) don't do anything
  // return the object at the end
}

function charCountAlt(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character
  for (const element of str) {
    let char =  element.toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      // result[char] > 0 ?  result[char]++ : result[char] = 1 
      result[char] = ++result[char] || 1
    }
  }
  return result;
    // if the char is a number/letter and is a key in object, add one to count
    // if the char is a number/letter and not in object, add it and set value to 1
    // if the chat is something else(space, period, etc) don't do anything
  // return the object at the end
}


function charCountAlt1(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character
  for (const element of str) {
    let char =  element.toLowerCase();
    if(isAlphaNumeric(char)) {
      // result[char] > 0 ?  result[char]++ : result[char] = 1 
      result[char] = ++result[char] || 1
    }
  }
  return result;
    // if the char is a number/letter and is a key in object, add one to count
    // if the char is a number/letter and not in object, add it and set value to 1
    // if the chat is something else(space, period, etc) don't do anything
  // return the object at the end
}
console.log(charCount("hello there"))
console.log(charCountAlt("hello there I am here"))
console.log(charCountAlt("hello there I am here"))

function isAlphaNumeric(char) {
  let code =  char.charCodeAt(0);
  if (!(code>47 && code <58) && // numeric (0-9)
  !(code>64 && code <91) && // upper alpha (A-Z)
  !(code>96 && code <123)  
    ) {//lower alpha (a - z)
    return false
  }
  return true
  
}