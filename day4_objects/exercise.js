//! Exercise 1 - Address Object

const address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) {
    console.log("Exercise 1 ->", key, address[key]);
  }
}

showAddress(address);

//! Exercise 2 - Factory and Constructor Functions

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address2 = createAddress("a", "b", "c");
console.log("Exercise 2 ->", address2);

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address3 = new Address("a", "b", "c");
console.log("Exercise 2 ->", address3);

//! Exercise 3 - Object Equality
let address4 = new Address("a", "b", "c");
let address5 = new Address("a", "b", "c");

function areEqual(address4, address5) {
  return (
    address4.street === address5.street &&
    address4.city === address5.city &&
    address4.zipCode === address5.zipCode
  );
}

function areSame(address4, address5) {
  return address4 === address5;
}

console.log("Are Equal -> ", areEqual(address4, address5));
console.log("Are Same -> ", areSame(address4, address5));

//! Exercise 4 - Blog Post Object
let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "d", body: "e" },
    { author: "f", body: "g" },
  ],
  isLive: true,
};

console.log("Exercise 4 ->", post);

//! Exercise 5 - Constructor Functions
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post2 = new Post("a", "b", "c");
console.log("Exercise 5 ->", post2);

//! Exercise 6 - Price Range Object

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
  { averagePerPerson: 5 },
  { averagePerPerson: 12 },
  { averagePerPerson: 25 },
];

let priceRange = priceRanges.find(function (priceRange) {
  return (
    restaurants[0].averagePerPerson >= priceRange.minPerPerson &&
    restaurants[0].averagePerPerson <= priceRange.maxPerPerson
  );
});

console.log("Exercise 6 ->", priceRange);
