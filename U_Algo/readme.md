_Calculate Time_
let t1 = performance.now()
addUpTo(10000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t1-t2)/ 1000} seconds.)
