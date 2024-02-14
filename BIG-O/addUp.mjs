function  addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
   total += i ;
  }
  return total;
}

let t1 = performance.now();
console.log( addUpTo(6));
let t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
function addUpTo2(n) {
  return n *(n+1)/ 2
}

let t3 = performance.now();
console.log(addUpTo2(6));
let t4 = performance.now();
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);
