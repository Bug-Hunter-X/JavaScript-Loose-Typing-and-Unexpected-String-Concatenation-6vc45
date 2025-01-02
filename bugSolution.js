function foo(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number) after conversion
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Non-numeric values detected";
  }

  return a + b;
}

console.log(foo(2, 3)); // 5
console.log(foo(2, "3")); // 5
console.log(foo("2", 3)); // 5
console.log(foo("2", "3")); // 5
console.log(foo("abc", 3)); // Invalid input: Non-numeric values detected