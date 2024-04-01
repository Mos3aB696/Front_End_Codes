/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and \ or  returns a function

  - Map
  --- method executes a callback function on each element in an array. 
  --- It returns a new array made up of the return values from the callback function.
  --- The original array does not get altered

  - Syntax map(callBackFucntion(Element, Index, Array) { 
    // Block Of Code
  }, thisArg)
  --- Element [Mand] => The current element  being processed in the array
  --- Index [Opt] => The index of the current element being processed in the array
  --- Array [Opt]  => The Current Array
*/

let myNums = [1, 2, 3, 4, 5, 6];
let newArr = [];

for (let i = 0; i < myNums.length; i++) {
  newArr.push(myNums[i] + myNums[i]);
}
console.log(newArr);

// Same Idea With Map:

// Map with Anonymous Function
// let addSelf = myNums.map(function (num, index, arr) {
//   console.log(`Current Element => ${num}`);
//   console.log(`Current Index => ${index}`);
//   console.log(`Array ${arr}`);
//   console.log(`Array ${this}`);
//   // return num + num;
// }, 10);

// Arrow Funciton
let addSelf1 = myNums.map((num) => num + num);
console.log(addSelf1);

// Map with Named Function
function addition(ele) {
  return ele * ele;
}
let add = myNums.map(addition);
console.log(add);
// ---------------------------------------------------
/*
  Map 
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBooleans = "Elz123er4o";

// swappingCases
let sw = swappingCases
  .split("") // Use split metod to transfer the String to Array
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join(""); // Use join method to transfer the Array to return as String
console.log(sw);
// invertedNumbers
let inv = invertedNumbers.map((ele) => -ele);
console.log(inv);
// ignoreBooleans
let ign = ignoreBooleans
  .split("")
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .join("");

console.log(ign);
// ---------------------------------------------------
/*
  - Filter
  -- method executes a callback function on each element in an array.
  -- The callback function for each of the elements must return either true or false.
  -- The returned array is a new array with any elements for which the callback function returns true.
  -- The original array does not get altered

  - Syntax filter(callBackFunction(Element, Index, Array) { 
    // Block Of Code
  }, thisArg)
  --- Element [Mand] => The current element  being processed in the array
  --- Index [Opt] => The index of the current element being processed in the array
  --- Array [Opt]  => The Current Array
*/

// Get Frindes with name starts with A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Ali", "Israa"];

let friendsFilter = friends.filter(function (ele) {
  return ele.startsWith("A");
});
console.log(friendsFilter);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter(function (ele) {
  return ele % 2 === 0;
});
console.log(evenNumbers);
// ---------------------------------------------------
/*
  Filter
  - Filter Practise
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");
console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";
let igNumbers = ignoreNumbers
  .split("")
  .filter((ele) => isNaN(ele))
  .join("");
console.log(igNumbers);

// Filter String = Multiply
let mix = "A13BS2ZX";

let filterAndMulti = mix
  .split("")
  .filter(function (ele) {
    return Number.isInteger(parseInt(ele));
  })
  .map((ele) => ele * ele)
  .join("");

console.log(filterAndMulti);
let nu = [1, 2, 5, 4, 9, 0, 0, 7, 1, 0, 7];
let newArrr = [];
// function moveZeros(arr) {
let finial = nu.map((ele) => {
  return ele == 0 ? newArrr.push(ele) : newArrr.shift(ele);
});
// }
console.log(newArrr);
console.log(finial);
// console.log(moveZeros([1, 2, 5, 4, 9, 0, 0, 7, 1, 0, 7]));
// ---------------------------------------------------
/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFucntion(Accumulator, Current Val, Current Index, Source Array) {
    // Block of code
  }, initialValue)
  - Accumulator [Mand]=> the accumulated value previously returned in the last invocation
  - Current Val [Mand]=> the current element being processed in the array
  -  Index [Opt]=> the index of the current element being processed in the array
  ---------- Starts from index 0 if an initialValue is provided
  ---------- Otherwise, it starts from index 1
  - Array [Opt]=> the current Array
  - initialValue [Opt]=> can be passed which acts as the initial value of the accumulator.

*/
let nums = [10, 20, 15, 30];

let addNums = nums.reduce(function (acc, current, index, arr) {
  document.write(`<div>This is Accumulator => ${acc}</div>`);
  document.write(`<div>Current Element => ${current}</div>`);
  document.write(`<div>Current Element Index => ${index}</div>`);
  document.write(`<div>Array => ${arr.join(" | ")}</div>`);
  document.write(`<div> <mark> <b> ${acc + current} </b> </mark> </div>`);
  document.write(`=========================`);

  return acc + current;
}, 15);
console.log(addNums);
// ---------------------------------------------------
/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// Longest Word
let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Test",
];
let longWord = theBiggest.reduce(function (acc, current) {
  return acc.length > current.length ? acc : current;
});
console.log(longWord);

// Remove Characters + Use Reduce
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let word = removeChars
  .filter(function (ele) {
    return ele != "@";
  })
  .reduce(function (acc, current) {
    // Here I use reduce to make function can make like join() method
    return `${acc}${current}`;
  });

console.log(word);
// ---------------------------------------------------
/*
  - forEach
  --- method excutes a provided function once for each array element

  Syntax forEach(callBackFunction(Element, Index, Array) {
    // Block Of Code
  });
  --- Element [Mand] => The current element  being processed in the array
  --- Index [Opt] => The index of the current element being processed in the array
  --- Array [Opt]  => The Current Array

  Note
  - Doesn't return anything [Undefined]
  - Break will not break the loop
*/
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // remove active class from all element
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // add active class to this element
    this.classList.add("active");
    // hide all divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

const numberss = [28, 77, 45, 99, 27];

numberss.forEach((number) => {
  console.log(number);
});
