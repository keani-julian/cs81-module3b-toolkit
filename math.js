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
//1:5 
console.log (square(4))
console.log (isEven(0))
console.log (isOdd(5))
console.log (multiply(4,4))
console.log (maxOfTwo(3,6))
// 2:5
console.log (square(16))
console.log (isEven(8))
console.log (isOdd(9))
console.log (multiply(3,2))
console.log (maxOfTwo(7,0))
// 3:5
console.log (square(2))
console.log (isEven(1))
console.log (isOdd(17))
console.log (multiply(8,7))
console.log (maxOfTwo(34,9))
// 4:5
console.log (square(100))
console.log (isEven(6))
console.log (isOdd(60))
console.log (multiply(8,2))
console.log (maxOfTwo(44,222))
// 5:5
console.log (square(25))
console.log (isEven(75))
console.log (isOdd(21))
console.log (multiply(4,6))
console.log (maxOfTwo(55,5))