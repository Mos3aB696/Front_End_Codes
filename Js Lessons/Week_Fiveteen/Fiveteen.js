/*
  BOM 
  Local Storage
  - setItem(Key, Value)
  - getItem(Key)
  - removeItem(Key)
  - clear()
  - key()
  - length


      $ Type Of local Storage is Object, 
      So you can use dot notation and braket notation to set new key



      Info
  - NO Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// // Set
// // If key sets before, make redeclaring
// window.localStorage.setItem("color", "#00bcd482");
// // window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";
// window.localStorage.setItem("background", "red");
// window.localStorage.borderRaduce = "50%";

// // Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);
// // Length
// console.log(localStorage.length);

// // Remove One
// window.localStorage.removeItem("background");
// window.localStorage.removeItem("borderRaduce");

// // Get Key
// console.log(window.localStorage.key(0));

// // Clear All
// window.localStorage.clear();

// // Set Color In Page
// document.body.style.backgroundColor = window.localStorage.color;

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

// ---------------------------------------------------------------------
/*
  BOM
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // [1] Add current color to div
  div.style.backgroundColor = window.localStorage.getItem("color");

  // [2] Remove active class form all lis
  // For remove active class form the element set in it as default, when the
  //  user make reload the page
  lis.forEach((li) => {
    li.classList.remove("active");
  });

  // [3] Add active class to current color
  document
    .querySelector(`[data-color=${window.localStorage.getItem("color")}]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);

    // Remove active class from all lis
    // For remove active class when the user click to choose another color
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    // Add active to the current element
    e.currentTarget.classList.add("active");

    // Add current color to the local storage
    window.localStorage.color = e.currentTarget.dataset.color;

    // Add current color to div
    div.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
// ---------------------------------------------------------------------

/*
  BOM 
  Session Storage
  - setItem(Key, Value)
  - getItem(Key)
  - removeItem(Key)
  - clear()
  - key()

  sessionStorage is similar to localStorage; the difference is that
  while data in localStorage doesn't expire,
  data in sessionStorage is cleared when the page session ends.

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session

*/
// ---------------------------------------------------------------------
/*
  JSON.stringify()
    A common use of JSON is to exchange data to/from a web server.
    When sending data to a web server, the data has to be a string.
    Convert a JavaScript [object, array] into a string with JSON.stringify().
*/
// A JavaScript value, usually an object or array, to be converted

// [1] Stringify a JavaScript Object

let obj = {
  name: "Mos3aB",
  age: 21,
  country: "Egypt",
};
let str = JSON.stringify(obj);

console.log(str);

// [2] Stringify a JavaScript Array

let arr = ["Mos3aB", "ali", "Mohammed"];
let json = JSON.stringify(arr);

console.log(json);

// [3] Stringify Dates (Exceptions)

/*
  In JSON, date objects are not allowed. The JSON.stringify() 
  method will convert any dates into strings.
*/
let object = { name: "John", today: new Date(), city: "New York" };
let myJSON = JSON.stringify(object);

console.log(myJSON);
console.log(object);

// [4] Stringify Functions (Exceptions)

/*
  The JSON.stringify() function will remove any functions from a JavaScript object, 
  both the key and the value:
*/

let fun = {
  name: "Mos3aB",
  age: function () {
    return 21;
  },
  country: "Egypt",
};

let funJson = JSON.stringify(fun);
console.log(funJson);
// ---------------------------------------------------------------------
/*
  JSON parse()
    method parses a string and returns a JavaScript object.
    The string has to be written in JSON format.
*/

let names = {
  first: "Mos3aB",
  middle: "Abdelkader",
  last: "Elazazi",
};

let namesJson = JSON.stringify(names);
let namesParse = JSON.parse(namesJson);

console.log(namesParse);
