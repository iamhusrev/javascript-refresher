// 1. Max of two numbers
function max(a, b) {
  return a > b ? a : b;
}

// 2. Landscape or Portrait
function isLandscape(width, height) {
  return width > height;
}

// 3. FizzBuzz
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}

// 4. Demerit Points
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) return "OK";
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  return points >= 12 ? "License Suspended" : points;
}

// 5. Even and Odd Numbers
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(i, i % 2 === 0 ? "EVEN" : "ODD");
  }
}

// 6. Count Truthy
function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

// 7. String Properties
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

// 8. Sum of Multiples of 3 and 5
function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

// 9. Grade
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

// 10. Stars
showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// 11. Prime Numbers
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

// 12. Object Equality
const firstObject = { a: 1, b: 2 };
const secondObject = { a: 1, b: 2 };
console.log(areEqual(firstObject, secondObject));
console.log(areSame(firstObject, secondObject));

function areEqual(obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length;
}

function areSame(obj1, obj2) {
  return obj1 === obj2;
}
