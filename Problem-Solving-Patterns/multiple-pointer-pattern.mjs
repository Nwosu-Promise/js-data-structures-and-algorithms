// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.



const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return [arr[i], arr[j]]
        }
      
    }
    
  }
}
// Time complexity - O(N^2)
// Space complexity - O(1)

const a = sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
const b = sumZero([-2,0,1,3]) //undefined
const c = sumZero([1,2,3]) // undefined

console.log({a, b, c});