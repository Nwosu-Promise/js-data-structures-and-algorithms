function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
     console.log(i, j); 
    } 
  }
}

printAllPairs(10)
// BIG-O here is O(n^2)
// O(n) * O(n) = O(n * n) =  O(n^2)
// O(n^2) - quadratic time complexity