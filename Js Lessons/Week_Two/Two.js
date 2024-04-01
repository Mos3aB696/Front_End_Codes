//====================================
// ---------------------------------------------------------assign 1---------------------------------------------------------
// Add Variables Here
let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log("" + numberOne + numberTwo); // Normal Concatenate => 1020
console.log(typeof "numberOne"); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof "${numberOne}"); // Template Literals Way => String

/*
  Normal Concatenate
  20
  10
*/
console.log(numberTwo + "\n" + numberOne);

/*
  Template Literals Way
  20
  10
*/
console.log(`${numberTwo}
${numberOne}`);

// ---------------------------------------------------------assign 2---------------------------------------------------------
console.log(typeof ["elzero", "innerHTML"]); // object
console.log(typeof ["elzero"]); // object

// ---------------------------------------------------------assign 3---------------------------------------------------------
console.log(
  "'" +
    "I" +
    "'" +
    "m" +
    " " +
    "IN" +
    "\n" +
    "\\" +
    "\\" +
    "\n" +
    "LOVE" +
    " " +
    "\\" +
    "\\" +
    " " +
    '"' +
    '"' +
    '"' +
    " " +
    "'" +
    "'" +
    "'" +
    "\n" +
    "+" +
    "+" +
    " " +
    "WITH" +
    " " +
    "+" +
    "+" +
    "\n" +
    "\\" +
    '"' +
    '"' +
    '"' +
    "\\" +
    '"' +
    '"' +
    '"' +
    "\n" +
    '"' +
    '"' +
    "JAVASCRIPT" +
    '"' +
    '"' +
    "``"
);

//--------------------------------------------------------- assign 4---------------------------------------------------------
let a = 21;
let b = 20;
let c = `${b}${a}${"_"}`;
// Template Liters(ES6)
console.log(`${"_"}${a}${"_"}${c.repeat(3)}${b}${"_"}`);

// Genral Way
console.log("_" + a + "_" + c.repeat(3) + b + "_");
