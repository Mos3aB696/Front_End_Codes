//------------------[Assign One]
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Mos3aB", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//------------------[Assign Two]
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === undefined) {
    console.log(firstNum + secondNum);
  } else if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//------------------[Assign Three]
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge} Years`);
    console.log(`${theAge * 12}  Months`);
    console.log(`${theAge * 12 * 4}  Weeks`);
    console.log(`${theAge * 12 * 30} Days`);
    console.log(`${theAge * 12 * 30 * 24} Hours`);
    console.log(`${theAge * 12 * 30 * 24 * 60} Minutes`);
    console.log(`${theAge * 12 * 30 * 24 * 60 * 60} Seconds`);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(21); // Months Example => 456 Months

//------------------[Assign Four] (Challenge)

function checkStatus(a, b, c) {
  info = [a, b, c];
  for (i = 0; i < 3; i++) {
    if (typeof info[i] === "string") {
      first = info[i];
    } else if (typeof info[i] === "number") {
      second = info[i];
    } else if (typeof info[i] === "boolean") {
      if (info[i] === true) {
        third = " You Are Available For Hire";
      } else {
        third = " You Are Not Available For Hire";
      }
    }
  }
  document.write(`<p>Hello ${first}, Your Age Is  ${second}, ${third}</p>`);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus("Mos3aB", true, 21); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//------------------[Assign Five]

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value = ${i}>${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2022);

//------------------[Assign Six]

function multiply(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      result *= Math.trunc(numbers[i]);
    } else {
      continue;
    }
  }
  return result;
}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
