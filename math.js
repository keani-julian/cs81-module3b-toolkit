//following function will just be to multiply an int by 2
function double(n) {
    return n * 2;
}
console.log (double(4));
console.log (double(5));
console.log (double(3));
console.log (double(12));

// square a number
function square(n) {
  return n * n;
}
// check if a number is even
function isEven(n) {
  return n % 2 === 0;
}
// check if a number is odd
function isOdd(n) {
  return n % 2 !== 0;
}
// multiply two numbers
function multiply(a, b) {
  return a * b;
}
// return the larger of two numbers
function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log (square(4))
console.log (isEven(0))
console.log (isOdd(5))
console.log (multiply(4,4))
console.log (maxOfTwo(3,6))