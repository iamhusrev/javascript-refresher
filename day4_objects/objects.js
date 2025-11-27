//* OBJECTS IN JAVASCRIPT

console.log("----------------------");
console.log("Examples:");
console.log("----------------------");

//! 1. Object literal syntax

console.log("1. Object Literal Syntax");

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "traveling", "swimming"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  greet: function () {
    console.log("Hello, " + this.firstName + " " + this.lastName + "!");
  },
};
console.log(person);

// Accessing object properties
console.log("First Name:", person.firstName);
console.log("City:", person.address.city);
person.greet();

console.log("----------------------");

//! 2. Factory Functions
console.log("2. Factory Functions");

function createPerson(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
}
const person1 = createPerson("Alice", "Smith", 28);
const person2 = createPerson("Bob", "Johnson", 35);
console.log(person1.getFullName());
console.log(person2.getFullName());

console.log("----------------------");

//! 3. Constructor Functions
console.log("3. Constructor Functions");
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const person3 = new Person("Charlie", "Brown", 40);
const person4 = new Person("Diana", "Prince", 32);
console.log(person3.getFullName());
console.log(person4.getFullName());

console.log("----------------------");

//! 4. Classes
console.log("4. Classes");
class PersonClass {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
const person5 = new PersonClass("Eve", "Adams", 29);
const person6 = new PersonClass("Frank", "Miller", 45);
console.log(person5.getFullName());
console.log(person6.getFullName());
console.log("----------------------");

//! 5. Dynamic Nature of Objects
console.log("5. Dynamic Nature of Objects");
const dynamicPerson = {
  name: "George",
  age: 50,
};
console.log(dynamicPerson);
dynamicPerson.job = "Engineer"; // Adding new property
console.log("After adding job:", dynamicPerson);
delete dynamicPerson.age; // Deleting property
console.log("After deleting age:", dynamicPerson);
console.log("----------------------");
console.log("End of Object Examples");
console.log("----------------------");

//! 6. Constructor Property
console.log("6. Constructor Property");

const arr = [];
console.log("Array Constructor:", arr.constructor);
const obj = {};
console.log("Object Constructor:", obj.constructor);
const date = new Date();
console.log("Date Constructor:", date.constructor);
console.log("----------------------");

//! 7. Functions are Objects
console.log("7. Functions are Objects");
function greet(name) {
  return "Hello, " + name + "!";
}
greet.language = "English"; // Adding property to function
greet.sayGoodbye = function (name) {
  return "Goodbye, " + name + "!";
};
console.log("Greet language:", greet.language);
console.log(greet("Alice"));
console.log(greet.sayGoodbye("Bob"));
console.log("----------------------");

//! 8. Value vs Reference Types
console.log("8. Value vs Reference Types");
let x = 10;
let y = x; // Copying value
y = 20;
console.log("x:", x); // 10
console.log("y:", y); // 20
const objA = { value: 10 };
const objB = objA;
objB.value = 20;
console.log("objA.value:", objA.value); // 20
console.log("objB.value:", objB.value); // 20
console.log("----------------------");

//! 9. Enumerating Properties of an Object
console.log("9. Enumerating Properties of an Object");
const sampleObj = {
  name: "Sample",
  type: "Example",
  version: 1.0,
  draw() {
    console.log("Enumerating Properties of an Object -> draw6");
  },
};
console.log("-----------Key in sampleObj:");
for (let key in sampleObj) {
  console.log("Enumerating Properties of an Object ->", key, sampleObj[key]);
}

console.log("------------Object.keys(sampleObj):");
for (let key of Object.keys(sampleObj)) {
  console.log("Enumerating Properties of an Object ->", key, sampleObj[key]);
}

console.log("------------Object.entries(sampleObj):");
for (let [key, value] of Object.entries(sampleObj)) {
  console.log("Enumerating Properties of an Object ->", key, value);
}

console.log("------------Checking property existence using 'in' operator:");

if ("name" in sampleObj) {
  console.log(
    "Enumerating Properties of an Object -> The 'name' property exists in sampleObj."
  );
}

console.log("----------------------");

//! 10. Cloning an Object
console.log("10. Cloning an Object");
const originalObj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

// Shallow Clone using Object.assign
const shallowClone = Object.assign({}, originalObj);
shallowClone.a = 10;
shallowClone.c.d = 30;
console.log("Original Object after shallow clone modification:", originalObj);
console.log("Shallow Clone:", shallowClone);
// Deep Clone using JSON methods
const deepClone = JSON.parse(JSON.stringify(originalObj));
deepClone.c.d = 50;
console.log("Original Object after deep clone modification:", originalObj);
console.log("Deep Clone:", deepClone);
console.log("----------------------");

//! 11. Garbage Collection
console.log("11. Garbage Collection");
let gcObj = { name: "Garbage Collector" };
console.log("Before nullifying:", gcObj);
gcObj = null;
console.log(
  "After nullifying, gcObj is set to null and eligible for garbage collection."
);

console.log("----------------------");

//! 12. Built-in Objects
console.log("12. Built-in Objects");
const dateObj = new Date();
console.log("Current Date and Time:", dateObj.toString());
const randomNum = Math.random();
console.log("Random Number between 0 and 1:", randomNum);
const str = " Hello World ";
console.log("Original String:", str);
console.log("Trimmed String:", str.trim());
console.log("Uppercase String:", str.toUpperCase());
console.log("----------------------");

//! 13. Template Literals with Objects
console.log("13. Template Literals with Objects");
const user = {
  username: "johndoe",
  email: "johndoe@example.com",
};
console.log(`User Info: Username - ${user.username}, Email - ${user.email}`);
console.log("----------------------");

console.log("End of Object Examples");
console.log("----------------------");

