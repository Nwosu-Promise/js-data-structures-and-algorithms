function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(10000)
// BIG-O here is O(1) - this depends on the size of the input n;
// O(1) - constant time complexity