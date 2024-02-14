// write a function which takes in a string and returns counts of each character in the string

const object = {
  a: '1',
  b: '2',
  c: '3',
};

console.log(object['a']);
function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char =  str[i].toLowerCase()
    if(result[char] > 0 && (typeof result[char] ===string) ) {
      result[char]++;
    } else if (result[char] = 0 && (typeof result[char] ===string) ) {
      result[char] = 1
    }
  }
  return result;
    // if the char is a number/letter and is a key in object, add one to count
    // if the char is a number/letter and not in object, add it and set value to 1
    // if the chat is something else(space, period, etc) don't do anything
  // return the object at the end
}

console.log(charCount("hello there"))