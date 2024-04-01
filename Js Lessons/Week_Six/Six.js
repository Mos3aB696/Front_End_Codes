document.body.style.background = "#333";
/**
 * Array
 * - Create Arrays [Two Methods] new Array() + []
 * - Access Arrays Elements
 * - Nested Arrays
 * - Change Arrays Elements
 * - Check for array Array.isArray(arr);.
 */

let myFriends = ["Ahmed", "Mona", "Ibrahim", ["Ali", "Mos3aB"]];
// YOu can make Nested Array by put one Array in another Array

console.log(`Hello ${myFriends[1]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`Hello ${myFriends[0]}`);
console.log(` ${myFriends[0][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(` ${myFriends[3][1][3]}`);

console.log(myFriends);
myFriends[1] = "Reda"; // Change Element by Another
console.log(myFriends);
console.log(myFriends);
myFriends[3] = "Moha"; // Change An Array by Element
console.log(myFriends);
console.log(myFriends);
myFriends[3] = ["Sara", "Mona", "Elsayed"]; // Change Element by An Array
console.log(myFriends);

console.log(typeof myFriends);
console.log(Array.isArray(myFriends));
// You use Array.isArray() => to check if it array or not ?

let str = "Mos3aB";
console.log(Array.isArray(str));

//-------------------------------------------------------------------

/**
 * Array Methods
 * - Length
 */

// Index Starts from 0 [0, 1, 2, 3]
// Length Starts from 1 [1, 2, 3, 4]

let hisFriends = ["Ahmed", "Ali", "Sayed", "Alaa"];

console.log(hisFriends.length);
// You use Length to know how many of Arrays Element

console.log(hisFriends);
hisFriends[hisFriends.length] = "Ibrahim";
console.log(hisFriends);
console.log(hisFriends);
hisFriends[hisFriends.length - 1] = "Ali";
console.log(hisFriends);
console.log(hisFriends);
hisFriends.length = 3;
console.log(hisFriends);

//-------------------------------------------------------------------

/**
 * Arrays Methods [Adding And Removing]
 * - unshift("", "") Add Element to the Frist
 * - push("", "") Add Element to the End
 * - shift() Remove Frist Element From Array
 * - pop() Remove Last Element From Array
 */

let himFriends = ["Ahmed", "Ali", "Sayed", "Alaa"];

console.log(himFriends);

himFriends.unshift("Osama", "Ali");

console.log(himFriends);

himFriends.push("Samah", "Sara");

console.log(himFriends);

himFriends.shift();

console.log(himFriends);

himFriends.pop();

console.log(himFriends);

// You can restore the removes element in a new variable

let myFrist = himFriends.shift();
let myLatest = himFriends.pop();

console.log(`The Frist Name Is ${myFrist}`);
console.log(`The Last Name Is ${myLatest}`);

//-------------------------------------------------------------------

/**
 * Arrays Methods [Search]
 * - indexOf(Search Element, From index [opt])
 * - lastIndexOf(Search Element, From index [opt])
 * - includes(valueToFind, fromIndex [opt]) [ES7]
 */

let Friends = ["Ahmed", "Mohammed", "Sayed", "Alaa", "Ahmed"];

console.log(Friends);

// Search for element from the start
console.log(Friends.indexOf("Mohammed"));
console.log(Friends.indexOf("Mohammed", 2));
console.log(Friends.indexOf("Ahmed", 2));

// Search for element from the end put count from the start
console.log(Friends.lastIndexOf("Ahmed"));
console.log(Friends.lastIndexOf("Ahmed", -2));

// Search if an element in array or not
console.log(Friends.includes("Mohammed"));
console.log(Friends.includes("Mohammed", 2));
console.log(Friends.includes("Mos3aB"));

if (Friends.includes("Ahmed") !== false) {
  console.log("This User Is Ahemd");
} else if (Friends.includes("Mos3aB") !== true) {
  console.log("This User Not Found");
}

//-------------------------------------------------------------------

/**
 * Arrays Methods [sort]
 * - sort(Function [opt])
 * - reverse
 */

let friendss = [10, "Sayed", "Ali", "90", 1000, 100, 20, "10", -20, -10];

console.log(friendss);
console.log(friendss.sort());
console.log(friendss.sort().reverse());

//-------------------------------------------------------------------

/**
 * Arrays Methods [Slicing]
 * - slice(Start [opt], End [opt] Not including end)
 * --- slice() => All Array
 * --- If Start Is Undefined => 0
 * --- Negative Count From End
 * --- If End Is Undefined || > Indexes => Slice To The End Array.length
 * --- Return New Array
 * - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
 * --- If Negative => Start Froom The End
 * --- Make overwrite the original array (Don't make a new Array)
 */

let OurFriends = ["Ahmed", "Mohammed", "Sayed", "Alaa", "Ahmed"];

console.log(OurFriends);

console.log(OurFriends.slice());
console.log(OurFriends.slice(1));
console.log(OurFriends.slice(1, 3));
console.log(OurFriends.slice(-2));
console.log(OurFriends.slice(1, -2));
console.log(OurFriends.slice(-4, -1));
console.log(OurFriends);

console.log(OurFriends.splice(2, 3, "Ali", "Ibrahim"));
console.log(OurFriends);
console.log(OurFriends.splice(1, 1, "Mos3aB", "Sayed"));
console.log(OurFriends);
console.log(OurFriends.splice(OurFriends.length, 0, "Sara"));
console.log(OurFriends);
console.log(OurFriends.splice(OurFriends.length - 2, 2, "Tasnem"));
console.log(OurFriends);

//--------------------------------------------------------------

/**
 * Arrays Methods [Joining]
 * - concat(Array, Array) => Return A New Array
 * - join(Seperator)
 */

let nowFriends = ["Ahmed", "Mohammed", "Sayed", "Alaa", "Ahmed"];
let myNewFriends = ["Samer", "Moneer"];
let schoolFriends = ["Manar", "Salma"];

console.log(nowFriends.concat(myNewFriends).concat(schoolFriends));
console.log(nowFriends);

console.log(nowFriends.join(" | "));

//--------------------------------------------------------------
//--------------------------------------------------------------

// ---------------[Assignment One]

let myFriendss = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
let zeroo = num - num;

// Method 1
console.log(myFriendss.slice(zeroo, num));

// Method 2
console.log(myFriendss.splice(zeroo, num));

// ---------------[Assignment Two]

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends = friends.splice(friends.indexOf("Eman"), friends.indexOf("Osama"));

console.log(friends);

// ---------------[Assignment Three]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr);

// ---------------[Assignment Four]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// First Way By slice() [One Code]

console.log(
  words[
    words[words.indexOf("Facebook") + words.indexOf("Facebook")].indexOf(
      "School"
    )
  ][0]
    .slice(
      words[words.indexOf("Facebook") + words.indexOf("Facebook")].indexOf(
        "School"
      )
    )
    .toUpperCase()
);

// Second Way By splice()

words.splice(0, words.length, "zero");
console.log(words.join().toUpperCase());

// ---------------[Assignment Five]

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("found");
} else if (haystack) {
  console.log("found");
}

// ---------------[Assignment Six]

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();
console.log(allArrs); // fxy

//--------------------------------------------------------------

// Array Methods Challenge

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// -----------[One]
my = my.slice(zero, ++counter).reverse();
console.log(my);

// -----------[Two]
console.log(my.slice(++zero, --counter));

// -----------[Three]
console.log(
  my[zero].slice(--zero, --counter).concat(my[counter].slice(counter))
);

// -----------[Four]
console.log(
  my[++zero]
    .slice(--zero, counter)
    .concat(my[counter].slice(counter))
    .slice(-counter, --zero)
    .concat(my[++zero].slice(zero, --counter))
);
