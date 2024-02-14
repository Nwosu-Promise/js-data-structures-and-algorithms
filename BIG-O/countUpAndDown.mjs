function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
    //  O(n)
  }
  console.log("At the top! \n Going down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  // O(n)
  console.log('Back down. Bye!');
}

countUpAndDown(10)

// BIG-O here is O(n)
// O(n) + O(n) = O(n + n) = O(2n)
// O(n) - linear time complexity