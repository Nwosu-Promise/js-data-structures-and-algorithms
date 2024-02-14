function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(10000)
// BIG-O here is O(n) - this depends on the size of the input n; as n grows
// O(n) + O(n) = O(n + n) = O(2n)
// O(n) - linear time complexity