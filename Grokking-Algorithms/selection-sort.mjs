const find_smallest = (arr) => {
  let smallest = arr[0];
    let smallest_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
};

const selection_sort = (arr) => {
  let new_array = [];
  while (arr.length > 0) {
    let smallest = find_smallest(arr);
    new_array.push(arr.splice(smallest, 1)[0]);
  }
  return new_array;
};

console.log(selection_sort([5, 3, 6, 2, 10]));
