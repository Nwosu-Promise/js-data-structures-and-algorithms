const binary_search = (array, element) => {
  let low = 0;
  let high = array.length - 1;

  // Check the middle elrment
  while (low <= high) {
    let mid = low + high;
    let guess = array[mid];

    if (guess < element) {
      low = mid + 1;
    } else if (guess > element) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return null;
};

const my_array = [1, 3, 5, 7, 9];

console.log(binary_search(my_array, 3));
console.log(binary_search(my_array, 10));
