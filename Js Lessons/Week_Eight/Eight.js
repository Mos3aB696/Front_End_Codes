/**
 * Function
 * - What is Function?
 *     function is a block of code designed to perform a particular task.
 *     (DRY) => Don't repeat yourself
 * - User Defined vs Built in
 * - Syntax + Basic Usage
 *  function  identifier(parameters) {
 *  // Block Of Code
 * }
 *
 *  identifier(arguments);
 *
 * # identifier => Function Name [Function names can contain letters, digits (same rules as variables).]
 * # identifier(arguments) => function is executed when "something" calls it
 * # parameters  are listed inside the parentheses () in the function definition. [Variable]
 * # arguments => are the values received by the function when it is invoked [Variable Value]
 * ## Notes => Inside the function, the arguments (the parameters) behave as
 *            local variables.
 * - Local Variables
 * # Variables declared within a JavaScript function, become LOCAL to the function.
      Local variables can only be accessed from within the function.
 *
 * - Example From Real Life
 * - Parameter + Argument
 * - Practical Example
 */
/*
  Why Functions?
  # You can reuse code: Define the code once, and use it many times.
    You can use the same code many times with different arguments,
    to produce different results.
*/

function sayHi(userName) {
  console.log(`Hi ${userName}`);
}
sayHi("Mos3aB");
sayHi("Sayed");
sayHi("Ali");

//-----------------------------------------------------------
/**
 * Function Advanced Examples
 */

function sayHello(userName, userAge) {
  if (userAge < 20) {
    console.log(`This Web Is Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${userAge}`);
  }
}
sayHello("Mos3aB", 21);
sayHello("Osama", 38);
sayHello("Ibrahim", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) continue;
    console.log(i);
  }
}
generateYears(2001, 2022, 2020);

function userContent(userName, userAge, userJob) {
  document.write(`<h3>Hello ${userName}</h3>`);
  document.write(`<p>Your Name Is <b>${userName}</b></p>`);
  document.write(`<p>Your Age Is <mark><b>${userAge}</b></mark> Years Old</p>`);
  document.write(`<p>Your Job Is <b>${userJob}</b></p>`);
  document.write("-".repeat(40));
}

userContent("Mos3aB", 21, "Front End Developer");
userContent("Ali", 38, "Back End Developer");
userContent("Salah", 40, "Front End Developer");
userContent("Amira", 25, "Back End Developer");

//-----------------------------------------------------------
/**
 * Function
 * - Return
 * # The return statement ends function execution and specifies a value to be
 *   returned to the function caller
 *
 * - Automatic Semicolon Insertion [No Line Terminator Allowed]
 * # The return statement is affected by automatic semicolon insertion (ASI).
 *   No line terminator is allowed between the return keyword and the expression.
 * - Interruptting
 */

function calc(num1, num2) {
  return num1 * num2;
}

let result = calc(5, 5);
console.log(result + 100);

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 15) {
      return `Interruptting`;
      // Here You use return as break , Use to make inerruptiing
    }
  }
}

generate(10, 20);

//-----------------------------------------------------------

/**
 * Function
 * - Default Function Parameters
 * - Function Parameters Default [Undefined]
 * - Old Startegies [Condition + Logical Or]
 * - ES6 Method
 */

// ------------------------------- ES6 Method [3]
function sayWelcome(userName = "Unknown", userAge = "Unknown") {
  // Condition Way [1]
  // if (userAge === undefined) {
  //   userAge = "Unknown";
  // }
  // Logical Or [2]
  // userAge = userAge || "Unknown";

  return `Hello ${userName} Your Age Is ${userAge}`;
}

console.log(sayWelcome("Mos3aB", 21));

//-----------------------------------------------------------

/**
 * Function
 * - Rest Parameters (...parameterName )
 *  # The rest parameter syntax allows a function to accept
 *    an indefinite number of arguments as an array
 * - Only One Allowed
 * # A function definition can have only one ...restParameter.
 * - Must Be Last Element
 * # The rest parameter must be the last parameter in the function definition.
 */

function Calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(Calc(20, 30, 100, 200));

//-----------------------------------------------------------

/**
 * Function Advanced Practice
 * - Parameters
 * - Default
 * - Rest
 * - Loop
 * - Condition
 */

function showInfo(
  userName = "Unknown",
  Age = "Unknown",
  hourRate = 0,
  show = "yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${userName}</h2>`);
  document.write(`<p>Age: ${Age}</p>`);
  document.write(`<p>Hour Rate <mark>$${hourRate}</mark> / Hour</p>`);
  if (show === "yes") {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is: Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Mos3aB", 21, 50, "yes", "Html", "Css", "Js");

//-----------------------------------------------------------
