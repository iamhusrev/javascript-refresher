//* CONTROL FLOW IN JAVASCRIPT

console.log("----------------------");
console.log("If Statement Examples:");
console.log("----------------------");

//! 1. If Statement
console.log("1. If Statement Example:");
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

//! 2. If-Else Statement
console.log("2. If-Else Statement Example:");
let time = 10;
if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

//! 3. If-Else If-Else Statement
console.log("3. If-Else If-Else Statement Example:");
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

console.log("----------------------");
console.log("Switch Statement Examples:");
console.log("----------------------");

//! 2. Switch Statement
console.log("1. Switch Statement Example:");
let fruit = "apple";
/*
 * Possible values for fruit:
 */
switch (fruit) {
  case "banana":
    console.log("You chose a banana.");
    break;
  case "apple":
    console.log("You chose an apple.");
    break;
  default:
    console.log("Unknown fruit.");
}

//! 2. Switch Statement with Multiple Cases
console.log("2. Switch Statement with Multiple Cases Example:");
let day = 3;
switch (day) {
  case 1:
  case 2:
    console.log("It's the start of the week.");
    break;
  case 3:
    console.log("It's midweek.");
    break;
  case 4:
  case 5:
    console.log("It's almost the weekend.");
    break;
  case 6:
  case 7:
    console.log("It's the weekend!");
    break;
  default:
    console.log("Invalid day.");
}

console.log("----------------------");
console.log("Ternary Operator Examples:");
console.log("----------------------");

//! 1. Ternary Operator
console.log("1. Ternary Operator Example:");
let num = 5;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log("The number is " + result + ".");

//! 2. Nested Ternary Operator
console.log("2. Nested Ternary Operator Example:");
let marks = 75;
let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : "C";
console.log("Your grade is " + grade + ".");

console.log("----------------------");
console.log("Loops Examples:");
console.log("----------------------");
//! 1. For Loop
console.log("1. For Loop Example:");
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

//! 2. While Loop
console.log("2. While Loop Example:");
let count = 0;
while (count < 5) {
  console.log("Count is " + count);
  count++;
}

//! 3. Do-While Loop
console.log("3. Do-While Loop Example:");
let index = 0;
do {
  console.log("Index is " + index);
  index++;
} while (index < 5);

//! 4. For-In Loop
console.log("4. For-In Loop Example:");
let colors = ["red", "green", "blue"];
for (let color in colors) {
  console.log("Index is " + color);
  console.log("Color is " + colors[color]);
}

//! 4. For-In Loop
console.log("4. For-In Loop Example:");
const person = {
  name: "John",
  age: 30,
};
for (let key in person) {
  console.log(key, person[key]); //! person.key is undefined
}

//! 5. For-Of Loop
console.log("5. For-Of Loop Example:");

for (let color of colors) {
  console.log("Color is " + color);
}

console.log("----------------------");
console.log("End of Control Flow Examples");
console.log("----------------------");
