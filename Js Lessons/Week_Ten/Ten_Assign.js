// ---------------[Assignment One]
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let onlyName = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce((acc, current) => `${acc}${current}`);
console.log(onlyName);

// ---------------[Assignment Two]
let myString = "EElllzzzzzzzeroo";
let finalWord = myString
  .split("")
  .filter(function (ele, index, arr) {
    return arr[index] !== arr[index + 1];
  })
  .join("");
console.log(finalWord);
// ---------------[Assignment Three]
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let finalName = myArray
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  })
  .split(",")
  .join("");
console.log(finalName);

// ---------------[Assignment Four]

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings
  .filter(function (ele) {
    return Number.isInteger(ele);
  })
  .map(function (ele) {
    return -ele;
  });
console.log(result);

// ---------------[Assignment Five]

let nums = [2, 12, 11, 5, 10, 1, 99];
let finalNumber = nums.reduce(function (acc, current) {
  return current % 2 === 0 ? acc * current : acc + current;
}, 1);
console.log(finalNumber);
