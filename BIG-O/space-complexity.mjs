function sum(arr) {
  let total = 0; // -> one number
  for (let i = 0 /* another number */; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(sum([10, 30, 260]));

// the space complexity is O(1)
// The only 2 variables are total and i
// these variables exist no matter what 
// and we are not adding new variables based off the length,
//  we are adding to the "total" variable but not making a new variable 

function double(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(2 * array[i])
  }
  return newArr;
}

console.log(`\n Double ${double([10,20,40])}`);

// The space complexity is O(n) 
// as the input grows the space it takes in the computer memory grows.
// The space it takes is directly proportional to the size of the array