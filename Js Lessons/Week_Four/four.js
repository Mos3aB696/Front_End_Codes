// Assignments For Lessons 23 To 26
// Assignment One
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(100 * 1000); // 100000
console.log(1e5); // 100000
console.log(1e6 / 1e1); // 100000
console.log(Math.ceil(Math.pow(316.2277, 2))); // 100000
console.log(150000 - 50000); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.6)); // 100000
console.log(Math.trunc(100000.6)); // 100000
console.log(Number.parseInt("100000")); // 100000

// Assignment Two
console.log(-Number.MIN_SAFE_INTEGER);

// Assignment Three
console.log(Number.MAX_SAFE_INTEGER.toString().length);

// Assignment Four
let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar));
console.log(+Number.parseFloat(myVar).toFixed(2));

// Assignment Five
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num));

// Assignment Six
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(-(-flt).toFixed()); // 10

// Assignment Seven
// Use this way if the random have min and max
const rndInt = Math.ceil(Math.random() * 5);
console.log(rndInt);

console.log(Math.floor(Math.random() * 5));
// -----------------------------------------------------------
// Assignments For Lessons 27 To 30

let userName = "Elzero";
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(1, 0).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(letterZ.toUpperCase().includes("Z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True

//-------------------------------------------------------------
// String Manipulation Challenge

let s = "Elzero  Web  School";

console.log(s.slice(2, 6).charAt(0).toUpperCase() + s.slice(3, 6));

console.log(s.substr(-4, 1).toUpperCase().repeat(8));

console.log(s.split(" ", 1));

console.log(`${s.substr(0, 6) + s.substr(10)}`);

console.log(
  `${
    s.substr(0, 1).toLowerCase() +
    s.substring(1, s.length - 1).toUpperCase() +
    s.substring(s.length - 1).toLowerCase()
  }`
);

//---------------------------------------------------------------
// Numbers From Variables Challenge

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.round(Math.min(a, b, c, d)));

console.log(Math.round(a) ** Math.floor(d));

console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Number.parseInt(d));

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
console.log(Math.ceil(b) / Math.ceil(d));
