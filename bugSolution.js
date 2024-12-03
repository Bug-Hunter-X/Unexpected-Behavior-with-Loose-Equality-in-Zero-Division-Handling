function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; 
  }
  return a / b; 
}

console.log(foo(1, 0)); // Returns 0
console.log(foo(0, 1)); // Returns 0
console.log(foo(10, 2)); // Returns 5