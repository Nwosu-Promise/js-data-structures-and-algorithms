// write a function called same, which accepts two arrays. 
// The Function should return true if every value in the array has its corresponding value squared in the second array. 
// The frequency of the values must be the same


same([1, 2, 3],  [4,1,9]) // true
same([1, 2, 3],  [1,9]) // false
same([1, 2, 1],  [4,4,1]) // false (must be same frequency)

function sameNaive(arr1, arr2) { // O(n^2)
  if(arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex =  arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1)
  }
  return true
}


// const a = same([1, 2, 3],  [4,1,9]) // true
// const b = same([1, 2, 3],  [1,9]) // false
// const c = same([1, 2, 1],  [4,4,1]) // false (must be same frequency)

// console.log({a, b, c});


function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (const val of arr1) {
    console.log(frequencyCounter1);
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

const a = same([1, 2, 3],  [4,1,9]) // true
// const b = same([1, 2, 3],  [1,9]) // false
// const c = same([1, 2, 1],  [4,4,1]) // false (must be same frequency)
console.log(a);
// console.log({a, b, c});