/**
 * Function
 * - Anonymous Function
 * - Calling Named Function vs Anonymous Function
 * - Argument To Order Function
 * - Task Without Name
 * - SetTimeout
 */
console.log(calc(20, 10));
function calc(num1, num2) {
  return num1 + num2;
}

let calculator1 = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator1(50, 30));
//  Arrow Function
let calculator2 = (num1, num2) => num1 * num2;
console.log(calculator2(50, 30));

function sayHello() {
  console.log(`Hello Mos3aB`);
}
// You can use named function with events
document.getElementById("hello").onclick = sayHello;
// You can use anonymous function with events
document.getElementById("show").onclick = function () {
  console.log("Show");
};
//  Arrow Function
document.getElementById("show").onclick = () => console.log("Show");

// Using anonymous functions as arguments
setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);

// --------------------------------------------------------------

/**
 * Function
 * - Function Inside Function (Nested Function)
 * - Return Function
  $ Nested Function can access all Variables in his parent, But 
    The Parent can't access the child Variables
  $ The Function starts search for the Variables inside, If can't find it 
    starts search in Global Variables in Parent.
 */

// Example One
function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatmsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatmsg();
  return message;
}

console.log(sayMessage("Mos3aB", "Elazazi"));

// Example Two
function sayMsg(fristName, lastName) {
  let msg = "Hi";
  function concatmsg() {
    return `${msg} ${fristName} ${lastName}`;
  }
  return concatmsg();
}
console.log(sayMsg("Ahmed", "Ali"));

// Example Three

function msg(frist, last) {
  let message = "Hello";
  function concatMsg() {
    function getFullName() {
      return `${frist} ${last}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}
console.log(msg("Mos3aB", "Abdelkader"));

// --------------------------------------------------------------
/**
 * Function
 * - Arrow Function
 * - regular vs Arrow [Param + No Param]
 * - Multiple Lines
 */

// When there is no parameters, you can use _ instead of parentheses
let print = (_) => 5;
console.log(print());

// When you have one parameter, you can remove parentheses
let theName = (theName) => `${theName}`;
document.write(`<h2>${theName("Mos3aB")}</h2>`);

// You can use more than one parameter in Arrow Function.
let fullName = (fristName, lastName) => `Hello ${fristName} ${lastName}`;
document.write(`<h2>${fullName("Mos3aB", "Elazazi")}</h2>`);
/*
When you use more than one statement in Arrow function, But 
in this case use named function better
*/
let calc1 = (num1, num2) => {
  for (let i = num1; i < num2; i++) {
    console.log(i);
  }
};
calc1(2, 5);

console.log(calculator1(50, 30));
//  Arrow Function
let calculator3 = (num1, num2) => num1 * num2;
console.log(calculator3(50, 30));

// --------------------------------------------------------------
/**
 * Scope
 * - Global and Local Scope
/*
  JavaScript has 3 types of scope:
  - Block scope [If, Switch, For]
  - Function scope
  - Global scope
*/

// ------------------------------------
// Block Scope [If, Switch, For]
/*
  $ ES6 introduced two important new JavaScript keywords: let and const.
  $ These two keywords provide Block Scope in JavaScript.
*/
{
  let v = 50; // Block scope
  const s = 30; // Block scope
}
console.log(v); // Output => Undefined

// v can Not be use here
// s can Not be use here

{
  var v = 30;
}
console.log(v); // Output => 30
// v Can be use here
// ------------------------------------

// ------------------------------------
/*
  Function Scope [Only in Local Scope]
  - JavaScript has function scope: Each function creates a new scope.
  -Variables defined inside a function are not accessible (visible)
    from outside the function
  - Variables declared with var, let and const are quite similar
    when declared inside a function.
*/
function myFunction() {
  var carName = "Volvo"; // Function Scope
  let carModel = 2020; // Function Scope
  const carColor = "Black"; // Function Scope
  console.log(` $ Car: ${carName} $  Model: ${carModel} $  Color: ${carColor}`);
}

myFunction();
// Local Scope
/*
  Local variables have Function Scope:
  They can only be accessed from within the function.
  variables with the same name can be used in different functions.
  Local variables are created when a function starts, and deleted when the function is completed
*/

function textShow() {
  let m = 10;
  let s = 40;
  console.log(`This is Local Scope - ${m}`);
  console.log(`This is Local Scope - ${s}`);
}
textShow();
/*
  Variables created without a declaration keyword (var, let, or const)
    are always global, even if they are created inside a function.
*/
function num() {
  a = 5;
}
num();
console.log(a * a);
// ------------------------------------

// Global Scope
/*
  A global variables have Global Scope:
  All scripts and functions on a web page can access it. 
  Variables declared Globally (outside any function) have Global Scope.
*/
let m = 1;
let s = 4;
console.log(`Show Number ${m}`);
console.log(`Show Number ${s}`);
function showCalc() {
  console.log(`Function - Show Number ${m}`);
  console.log(`Function - Show Number ${s}`);
}
showCalc();

/*
  The Lifetime of JavaScript Variables

  - The lifetime of a JavaScript variable starts when it is declared.
  - Function (local) variables are deleted when the function is completed.
  - In a web browser, global variables are deleted when you close the browser window (or tab).
*/

/*
  Lexical Scope
  $ Nested Function can access for all Variables in his parent, But 
    The Parent can't access for the child Variables
  $ The Function starts search for the Variables inside, If can't find it 
    starts search in Global Variables in Parent.

  Search
  - Execution Context
  - Lexical Environment
*/
function parent() {
  let a = 40;
  console.log(a);
  function child() {
    let a = 30;
    console.log(a);
    function childOfChild() {
      let a = 50;
      console.log(a);
    }
    childOfChild();
  }
  child();
}
parent();
console.log(a);
