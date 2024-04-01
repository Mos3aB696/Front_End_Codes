/*
  Destructuring
    Is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables.
  - Destructuring Array

  - Default value
    Each destructured property can have a default value. 
    The default value is used when the property is not present, 
    or has value undefined. It is not used if the property has value null.

  - Destructuring with more elements than the source => Undefined
*/

// let arrs = [
//   { name: "Anuja", from: "Saurav" },
//   { name: "Saurav", from: "Anuja" },
//   { name: "All", from: "All" },
// ];

// arrs.map(({ name, from }) => console.log(name, from));

// let a = 1;
// let b = 2;
// let c = 3;
// // let d = 4;
// let myFriends = ["Osama", "Ahmed", "Ali", "Sara"];

// // Set Default value
// [a = "A", b, c, d, e = "Mos3aB"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [x, y, , z] = myFriends;

// console.log(x);
// console.log(y);
// console.log(z);
// -----------------------------------------------------------
/*
  Destructuring
  - Destructuring Array Advanced Examples?

  - Rest property
    You can end a destructuring pattern with a rest property ...rest.
    This pattern will store all remaining properties of the object or array 
    into a new object or array.
    [The rest property must be the last in the pattern]

  - Parsing an array returned from a function
    It's always been possible to return an array from a function.
    Destructuring can make working with an array return value more concise.
*/

let herFriends = ["Mos3aB", "Hisham", "Ali"];
// Use rest property
const [m, ...other] = herFriends;
console.log(m);
console.log(other);

function test() {
  return [10, 20];
}
const [l, r] = test();
console.log(l);
console.log(r);

let friends = [
  "Osama",
  "Ahmed",
  "Ali",
  ["Mohammed", "Amr", ["Gamal", "Ibrahim"]],
];
console.log(friends[3][2][1]); // Ibrahim

let [, , , [a, , [, b]]] = friends;

console.log(a); // Mohammed
console.log(b); // Ibrahim
// -----------------------------------------------------------
/*
  Destructuring
  - Destructuring Array => Swapping Variables
  /*
  What is stash?
    stash is a library for JavaScript that makes using offline storage easy.
    stash supports storing strings, numbers, booleans, arrays, objects,
    regular expressions, dates, functions, DOM elements and more 
    (and all of this in ~1KB).
  */

// let book = "Video";
// let video = "Book";

// // Swapping by Store in stash (Way 1)

// // Store book value in stash
// let stash = book;

// // Change book value
// book = video;

// // Change video value
// video = stash;

// // Swapping by Destructuring (Way 2)
// [book, video] = [video, book];

// console.log(book);
// console.log(video);
// -----------------------------------------------------------
/*
  Destructuring
  - Destructuring Object 
  What the differance between binding patterns and assignment patterns ?
    In binding patterns, the pattern starts with a declaration keyword
      (var, let, or const). 
    In assignment patterns, the pattern does not start with a keyword 
      (you might need to wrap the the whole assignment in parentheses.)
*/

// const user = {
//   theName: "Mos3aB",
//   theAge: 21,
//   theTitle: "Front End Developer",
//   theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// // let theName = user.theName;
// // let theAge = user.theAge;
// // let theTitle = user.theTitle;
// // let theCountry = user.theCountry;
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// // ({ theName, theAge, theTitle, theCountry } = user);
// let { theName, theAge, theTitle, theCountry } = user;
// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);
// -----------------------------------------------------------
/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
    A property can be unpacked from an object and assigned to a variable with
    a different name than the object property.
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user = {
  theName: "Mos3aB",
  theAge: 21,
  theTitle: "Front End Developer",
  theCountry: "Egypt",
  // Nested Object
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n,
  theAge,
  theTitle: t,
  theCountry,
  theColor = "red",
  skills: { html: h, css },
} = user;

console.log(n);
console.log(theAge);
console.log(t);
console.log(theColor);
console.log(`My HTML Skill Progress Is : ${h}`);
console.log(`My Css Skill Progress Is : ${css}`);

const { html: skillOne, css: skillTwo } = user.skills;
console.log(skillOne);
console.log(skillTwo);
// -----------------------------------------------------------
/* 
  Destructuring
  - Destructuring Function Parameters
*/

// const theUser = {
//   theName: "Mos3aB",
//   theAge: 21,
//   // Nested Object
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };
// showDetails();
// Normal Way Wihtout Destructuring
// function showDetails(obj) {
//   console.log(`Your Name Is : ${obj.theName}`);
//   console.log(`Your Age Is : ${obj.theAge}`);
//   console.log(`Your Css Skill Progress Is : ${obj.skills.css}`);
// }
// With Destructuring
// function showDetails({
//   theName: na,
//   theAge: ag,
//   skills: { css, html },
// } = theUser) {
//   console.log(`Your Name Is : ${na}`);
//   console.log(`Your Age Is : ${ag}`);
//   console.log(`Your Css Skill Progress Is : ${css}`);
//   console.log(`Your HTML Skill Progress Is : ${html}`);
// }
// -----------------------------------------------------------
/*
  Destructuring
  - Destructuring Mixed Content
*/

// const info = {
//   theName: "Mos3aB",
//   age: 21,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     US: "Calfornia",
//   },
// };

// const {
//   theName: na,
//   age: ag,
//   skills: [one, two, three],
//   addresses: { egypt: eg, US },
// } = info;

// console.log(`Your Name Is: ${na}`);
// console.log(`Your Age Is: ${ag}`);
// console.log(`Your Skills Are: ${[one, two, three]}`);
// console.log(`Your Live In: ${US}`);
// -----------------------------------------------------------
