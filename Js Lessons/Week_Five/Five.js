document.body.style.background = "#333";
document.body.style.color = "#eee";
// let price = 100;
// let discount = false;
// let discountAmount = 20;
// let country = "Qater";
// let countryDiscount = 40;
// let othersDiscount = 50;

// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Egypt") {
//   price -= countryDiscount;
// } else if (country === "Syria") {
//   price -= othersDiscount;
// } else {
//   price = price;
// }

// console.log(price);
// ----------------------------------------
/*
	Nested If 
*/

let price = 200;
let discount = true;
let discountAmount = 40;
let country = "Qater";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if ((country = "Egypt")) {
  if (student === true) {
    price -= discountAmount + 40;
  } else {
    price -= discountAmount + 20;
  }
} else {
  price -= 10;
}
console.log(price);
//-----------------------------------------------
/*
Conditional (Ternary) Operator

condition ? If true : If false
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 40;
let result = theGender === "Female" ? "Mrs" : "Mr";

if (theGender === "Female") {
  console.log("Mrs");
} else {
  console.log("Mr");
}

theGender === "Female" ? console.log("Mrs") : console.log("Mr");

// document.write(result);
document.write(`Hello ${result} ${theName} `);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger than 60")
  : console.log("Unknown");

// ----------------------------------------------------------
/*
	Logical Or ||
	-- Null + Undefined + Any Falsy Value
	Nullish Coalescing Operator ??
	-- Null + Undefined
*/

// How to Know Falsy Value => By use Boolean()
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean(null));

let thePrice = 0;

console.log(`The Price Is ${thePrice || 150}`);
console.log(`The Price Is ${thePrice ?? 150}`);
//-------------------------------------------------------------
/*
	Switch Statement

	switch(expression) {
		Case 1:
			// Code Block 
			break;
		Case 2:
			// Code Block 
			break;
		Default:
			// Code Block
	}
	- Default Ordering
	- Multiple Match
	- ===
*/

let theDay = 2;

switch (theDay) {
  case 0:
  case 1:
    console.log("Holiday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  default:
    console.log("Unknown Day");
}
//--------------------------------------------------------------
// Assginments From 31 To 32

// ------------- Assign One
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 !== "-10"); // true
console.log(!-50 >= +"-40"); // true
console.log(!10 <= -"-40"); // true
console.log(+"10" === 10); // true
console.log(+20 > false); // true

// ------------- Assign Two
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(num1 <= num2); // true
console.log(num2 >= num1); // true
console.log(!(num1 > num2)); // true

// ------------- Assign Three
let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a < c) || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

//--------------------------------------------------------------

// Edit What You Want Here

let num3 = 10;
let num4 = 9;
let num5 = 10;
let num6 = 32;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num3 > num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num3 > num4 && num3 < num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num3 > num4 && num3 === num5) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num3 + num4 < num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num3 + num5 < num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num3 + num4 + num5 < num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num6 - (num3 + num5) + num4 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//--------------------------------------------------------------

// Transfar From If Condition To Switch
let job = "Developer";
let salary = 0;

if (job === "Manager") {
  console.log((salary = 8000));
} else if (job === "IT" || job === "Support") {
  console.log((salary = 6000));
} else if (job === "Developer" || job === "Designer") {
  console.log((salary = 7000));
} else {
  console.log((salary = 4000));
}

switch (job) {
  case "Manger":
    console.log((salary = 8000));
    break;
  case "IT":
  case "Support":
    console.log((salary = 6000));
    break;
  case "Developer":
  case "Designer":
    console.log((salary = 7000));
    break;
  default:
    console.log((salary = 4000));
}

// Transfar From Switch To If Condition
let holidays = 6;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

//--------------------------------------------------------------

// Chdnllenge One
let d = 10;

if (d < 10) {
  console.log(10);
} else if (d >= 10 && d <= 40) {
  console.log("10 To 40");
} else if (d > 40) {
  console.log("Ldrger Thdn 40");
} else {
  console.log("Unknown");
}

d < 10
  ? console.log(10)
  : d >= 10 && d <= 40
  ? console.log("10 To 40")
  : d > 40
  ? console.log("Ldrger Thdn 40")
  : console.log("Unknow");

// Chdllenge Two
let st = "Elzero Web School";

// You Cdn use indexOf() or sedrch()
if (st.charAt(st.search("W")).toLocaleLowerCase() === "w") {
  console.log("Good");
}
if (st !== "string") {
  console.log("Good");
}
if ((typeof st.length).toString() === "number") {
  console.log("Good");
}
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

//--------------------------------------------------------------

let day = "   friday  ";
day = day.trim()[0].toUpperCase() + day.trim().slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`No Appointments Available`);
    break;
  case "Monday":
  case "Thursday":
    console.log(`From 10:00 AM To 5:00 PM`);
    break;
  case "Tuesday":
    console.log(`From 10:00 AM To 6:00 PM`);
    break;
  case "Wednesday":
    console.log(`From 10:00 AM To 7:00 PM`);
    break;
  default:
    console.log(`Its Not A Valid Day`);
}

//--------------------------------------------------------------

let num7 = 9;
let str = "9";
let str2 = "20";

console.log(str != str2 && typeof str == typeof str2);
if (num7 == str) {
  console.log(`{num7} Is The Same Value As {str}`);
}
if (num7 == str && num7 !== str) {
  console.log(`{num7} Is The Same Value As {str} But Not The Same Type`);
}
if (num7 !== str2) {
  console.log(`{num7} Is Not The Same Value Or The Same Type As {str2}`);
}
if (str != str2 && typeof str == typeof str2) {
  console.log(`{str} Is The Same Type As {str2} But Not The Same Value`);
}

//--------------------------------------------------------------

// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
let num = 110; // "110"

if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(num);
}

//--------------------------------------------------------------

let num8 = 10;
let num9 = 30;
let num10 = "30";
console.log(num10 !== num8 && typeof num10 != typeof num9);
if (num10 > num8 && typeof num10 != typeof num9) {
  console.log(
    `30 Is Larger Than 10 And Type string Not The Same Type As number`
  );
} else if (num10 > num8 && num10 == num9 && typeof num10 != num9) {
  console.log(
    `30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number`
  );
} else if (num10 !== num8 && typeof num10 != typeof num9) {
  console.log(
    `{num10} Value And Type Is Not The Same As {num8} And Type Is Not The Same As {num9}`
  );
}

//--------------------------------------------------------------
