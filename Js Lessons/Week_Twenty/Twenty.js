document.body.style.background = "rgb(49 45 45)";
/*
  Date And Time
  - Date Constructor

  Static Methods
  Date.now()
    method returns the number of milliseconds elapsed since 
      January 1, 1970 00:00:00 UTC.

  - To track time you need starting point
  - Epoch time or Unix time in computer science is the number of seconds since January 1, 1970
  - Why 1970 [829 Days to 136 Years]

  Search For 
  - Years 2038 problem in computer science
*/

let dateNow = new Date();
console.log(dateNow);

console.log(Date.now()); // MilliSeconds
console.log(Date.now() / 1000 / 60 / 60 / 24 / 365); // Years
// -------------------------------------------------------------------
/*
  Date And Time
  - getTime() => Gets the time value in milliseconds.
  - getDate() => Gets the day-of-the-month, using local time.
  - getFullYear() => Gets the year, using local time.
  - getMonth() => Gets the month, using local time.[Index 0 to 11]
  - getDay() => Gets the day of the week, using local time.
  - getHours() => Gets the hours in a date, using local time.
  - getMinutes() => Gets the minutes of a Date object, using local time.
  - getSeconds() => Gets the seconds of a Date object, using local time.

  - getTimezoneOffset() => Gets the difference in minutes between the time
      on the local computer and Universal Coordinated Time (UTC).

*/

let dateN = new Date();
let birthday = new Date("May 3, 01");
let dateDiffer = dateN - birthday;

console.log(dateDiffer); // Current my Age
console.log(dateDiffer / 1000 / 60 / 60 / 24 / 365); // Current my Age
console.log(birthday.getTime()); // From Your date to Jan 1, 70
console.log(dateN.getTime());
console.log(dateN.getDate());
console.log(dateN.getFullYear());
console.log(dateN.getMonth());
console.log(dateN.getDay());
console.log(dateN.getHours());
console.log(dateN.getMinutes());
console.log(dateN.getSeconds());

console.log(Date.now());

console.log(Date.now() + dateN.getTimezoneOffset());

// -------------------------------------------------------------------
/*
  Date And Time
  - setTime(Ms) => Sets the date and time value in the Date object.
    A numeric value representing the number of elapsed milliseconds since midnight,
    January 1, 1970 GMT
  - setDate(date) => Sets the numeric day-of-the-month value of the Date object using local time.
    Negative And Positive
    A numeric value equal to the day of the month.
  - setFullYear(year, month, date) => A numeric value for the year.
  - setMonth(month, day) => Sets the month value in the Date object using local time.
  - setHours(Hour, Min, S, Ms) => Sets the hour value in the Date object using local time.
  - setMinutes(Min, S, Ms) => Sets the minutes value in the Date object using local time.
  - setSeconds(S, Ms) => Sets the seconds value in the Date object using local time.
*/

let currentDate = new Date();
console.log(currentDate);

currentDate.setTime(10000);
console.log(currentDate);

currentDate.setDate(10);
console.log(currentDate);

currentDate.setFullYear(2001, 4, 3);
console.log(currentDate);

currentDate.setMonth(4, 24);
console.log(currentDate);

currentDate.setHours(09, 30, 10);
console.log(currentDate);

currentDate.setMinutes(40, 50, 30);
console.log(currentDate);

currentDate.setSeconds(4, 24);
console.log(currentDate);
// -------------------------------------------------------------------
/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Date.parse("String") =>
    Parses a string containing a date, and returns the number of
    milliseconds between that date and midnight, January 1, 1970.
*/
console.log(Date.parse("may 3, 2001"));
let date1 = new Date("may 3, 2001");
console.log(date1);

let date2 = new Date(988837200000);
console.log(date2);

let date3 = new Date("5/3/2001");
console.log(date3);

let date4 = new Date("2001-05-03");
console.log(date4);

let date5 = new Date("2001-05");
console.log(date5);

let date6 = new Date("01");
console.log(date6);

let date7 = new Date(2001, 4, 3, 11, 30, 50);
console.log(date7);

let date8 = new Date(2001, 4, 3);
console.log(date8);

let date9 = new Date("2001-05-03T11:30:50z");
console.log(date9);
// -------------------------------------------------------------------
/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = performance.now();

// Operation
for (let i = 0; i <= 100000; i++) {
  // document.write(`<div>${i}</div>`); // 4292 ms
  // document.body.style.color = "white";
  // let div = document.createElement("div"); // 320 ms
  // let textNode = document.createTextNode(i);
  // div.appendChild(textNode);
  // document.body.appendChild(div);
}

// Time End
let end = performance.now();

// Operation Duration
let duration = end - start;
console.log(duration);
// -------------------------------------------------------------------
/*
  Generators
  - Generator function run its code when required
  - Generator function return special object [Generator Object]
  - Generator are iterable

  - Note: Generator functions do not have arrow function counterparts.

  Methods
  - next() => Returns a value of yield
*/

function* generateNumbers() {
  yield 1;
  yield 2;
  console.log(`Alert After Yield 2`);
  yield 3;
  yield 4;
}
let generator = generateNumbers();
console.log(typeof generator);
console.log(generator);

console.log(generator.next().done);
console.log(generator.next().value);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value);
}
// -------------------------------------------------------------------
/*
  Generators
  - Delegate Generator

  Methods
  - return() => 	Returns a value and terminates the generator
  - throw() => Throws an error and terminates the generator
*/
function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let generatorAlls = generateAll();

console.log(generatorAlls.next());
console.log(generatorAlls.next());
console.log(generatorAlls.next());
console.log(generatorAlls.return("Stop Here"));
console.log(generatorAlls.next());
// console.log(generatorAlls.throw("Stop Here"));
console.log(generatorAlls.next());
console.log(generatorAlls.next());
console.log(generatorAlls.next());
console.log(generatorAlls.next());

// Passing arguments into Generators
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

gen.next();
gen.next("Mos3aB");
gen.next("Elazazi");
// -------------------------------------------------------------------
/*
  Generators
  - Generate Infinite Numbers
  - User Return Inside Generators
*/

function* generateNumss() {
  // yield 1;
  // yield 2;
  // return "A";
  // yield 3;
  // yield 4;

  let index = 0;
  while (true) {
    yield index++;
  }
}

let generators = generateNumss();

console.log(generators.next());
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());

for (let i = 0; i <= 5; i++) {
  console.log(generators.next());
}
// -------------------------------------------------------------------
