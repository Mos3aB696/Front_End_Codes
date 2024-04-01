document.querySelector("body").style.background = "#333";
document.querySelector("body").style.color = "white";
document.querySelector("body").style.textAlign = "Center";
/**
 * Loop
 * - For
 * for ([1] [2] [3]) {
 *   // Block Of Code
 * }
 * [1] => Initilization
 * [2] => Condition
 * [3] => Action After Code Repeat
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// -----------------------------------------------------------

/**
 * Loop
 * - Loop On Sequences
 */

let myFriends = ["Osama", "Ahmed", "Sayed", "Ali", "Amira"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}

let ourFriends = [
  10,
  30,
  "Osama",
  "Ahmed",
  50,
  "Sayed",
  "Ali",
  100,
  "Amira",
  "Mos3aB",
  500,
  300,
];
let onlyNames = [];
let onlyNumbers = [];
for (let i = 0; i < ourFriends.length; i++) {
  if (typeof ourFriends[i] === "string") {
    onlyNames.push(ourFriends[i]);
  } else {
    onlyNumbers.push(ourFriends[i]);
  }
}
console.log(onlyNames);
console.log(onlyNumbers);

// -----------------------------------------------------------

/**
 * Loop
 * - Nested Loop
 */

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2021, 2022];

// for (let i = 0; i < products.length; i++) {
//   console.log("$".repeat(20));
//   console.log(`# ${products[i]}`);
//   console.log("$".repeat(20));
//   console.log("Colors: ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log("Models: ");
//   for (let f = 0; f < models.length; f++) {
//     console.log(`-- ${models[f]}`);
//   }
// }

// -----------------------------------------------------------

/**
 * Loop Control
 * - Break =>  statement "jumps out" of a loop.
 * - Continue => statement "jumps over" one iteration in the loop.
 * - Label
 */

let ourProducts = ["Keyboard", 20, "Mouse", "Pen", 50, "Pad", 10, "Monitor"];
let ourColors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < ourProducts.length; i++) {
  if (typeof ourProducts[i] === "number") continue;
  console.log(ourProducts[i]);
  // if (ourProducts[i] === "Pen") break;
  nestedLoop: for (let j = 0; j < ourColors.length; j++) {
    console.log(`- ${ourColors[j]}`);
    if (ourColors[j] === "Green") {
      break mainLoop;
    }
  }
}

// -----------------------------------------------------------

let Products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let i = 0;
for (;;) {
  console.log(Products[i]);
  i++;
  if (i === Products.length) break;
}
// -----------------------------------------------------------

let theProducts = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Phone"];
let theColors = ["Red", "Green", "Black"];
let theModels = [2020, 2021, 2022];
let showCount = 2;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  if (i === theProducts.length) break;
  document.write(`<div>`);
  document.write(`<h2>[${i + 1}] ${theProducts[i]}</h2>`);
  document.write(`<h3>* Colors:</h3>`);
  for (let j = 0; j < theColors.length; j++) {
    document.write(`<p>---- ${theColors[j]}</p>`);
  }
  document.write(`<h3>* Models:</h3>`);

  document.write(`<p>---- ${theModels.join(" | ")} </p>`);
  document.write(`</div>`);
}

// -----------------------------------------------------------

/**
 * Loop
 * - While
 * - Do \ While
 *
 *
 * [1]
 * while ( [2] ) {
 *  // Block Of Code
 * [3]
 * }
 *
 *
 *[1]
 * do {
 *  // Block Of Code
 *  [3]
 * } while ([2])
 *
 *
 * [1] => Initilization
 * [2] => Condition
 * [3] => Action After Code Repeat
 */

let thisProducts = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Phone"];

/*
  The condition is tested before the block of code is executed
*/

let index = 0;
while (index < thisProducts.length) {
  console.log(thisProducts[index]);
  index++;
}

/*
  The block of code is executed before the condition is tested
*/

let j = 0;
do {
  console.log(thisProducts[j]);
  j++;
} while (j < thisProducts.length - 7);

// -----------------------------------------------------------
