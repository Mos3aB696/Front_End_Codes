//-------------------- [Assign One]
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//-------------------- [Assign Two]

// Method One
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = Object.create(objMethodOne);
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.assign({ property: "Method Three" });
// objMethodThree.;
console.log(objMethodThree.property); // "Method Three"

// Method Four
let test = {
  1: "Mos3aB",
  2: "Ali",
};
let objMethodFour = Object.freeze({ property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"

//-------------------- [Assign Three]

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a: 1 }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
