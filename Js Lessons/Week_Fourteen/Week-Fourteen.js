/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Documemt Object 
  --- All Global Variables, Objects And Functions Are Members Of Window Object
  ------- Test Document And Console
  - What can we do with window object?
  --- Open window
  --- Close window
  --- Move window
  --- Resize window
  --- Print document
  --- Run code after period of time once or more
  --- Fully control the URL
  --- Save data inside browser to use later
*/

window.console.log("Good"); // Equal to
this.console.log("Good"); // Equal to
console.log("Good"); // Equal to

// window.document.title = "Mos3aB";

// ----------------------------------------------------------

/*
  BOM [Browser Object Model]
  - alert(Message) => Need no response Only ok available
  - confirm(Message) => Need response And return a boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Text");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");
// console.log(confirmMsg);

// confirmMsg === true
//   ? console.log("item deleted")
//   : console.log("item not deleted");

// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters!");
// console.log(promptMsg);

// if (promptMsg === "Write Day With 3 Characters!" || promptMsg === "") {
//   alert("Write Day With 3 Characters!");
// }
let lang = prompt("What is your favorite programming language?");

let feedback =
  lang.toLowerCase() === "javascript" ? `It's great!` : `It's ${lang}`;
alert(feedback);
// ----------------------------------------------------------
/*
  BOM [Browser Object Model]
  - setTimeOut(function, Timeout[ms], Additional Arguments)
      method calls a function after a number of milliseconds
      is executed only once.


  - clearTimeOut(Identifier)
      method clears a timer set with the setTimeout() method.
      method to prevent the function from starting.
*/

// Way One
setTimeout(() => {
  console.log("Message");
}, 2000);

// Way Two
setTimeout(sayMsg, 3000);
function sayMsg() {
  console.log("Iam Message");
}

// Way Three
let counter = setTimeout(sayMessage, 4000, "Mos3aB", 21);
function sayMessage(user, age) {
  console.log(`Iam Message For ${user} His Age Is: ${age}`);
}

// Use clearTimeOut()

let btn = document.querySelector("button");
btn.onclick = () => clearTimeout(counter);

// Important Quiz
const a = {
  i: 1,
  toString: function () {
    return a.i++;
  },
};

if (a == 1 && a == 2 && a == 3 && a == 4) {
  console.log("Hello World!");
}
// ----------------------------------------------------------
/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Arguments)
      method calls a function at specified intervals (in milliseconds).
      method continues calling the function until clearInterval() is called, or the window is closed.
  - cleatInterval(Identifier)
      method clears a timer set with the setInterval() method.
*/

let div = document.createElement("div");
let num = document.createTextNode("5");
div.appendChild(num);
document.body.appendChild(div);

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counterNum);
  }
}
let counterNum = setInterval(countDown, 1000);
// ----------------------------------------------------------
/*
  BOM [Browser Object Model]
  - location object
  --- href Get / Set [URL || Hash || File || Mail]
      property sets or returns the entire URL of the current page.
  --- host
      property returns the host (IP adress or domain) and port of a URL.
  --- hostname 
      property returns the host (IP adress or domain) of a URL
  --- hash 
      Returns the Location object's URL's fragment (includes leading "#" if non-empty)
  --- protocol
      property sets or returns the protocol of the current URL, including the colon (:).
  --- reload()
      Reloads the current page.
  --- replace()
      Removes the current page from the session history and navigates to the given URL.
  --- assign()
      Navigates to the given URL.
  --- pathname
      Returns the Location object's URL's path
  --- origin
      Returns the Location object's URL's origin
*/
console.log(location);
console.log(location.href);
let btn2 = document.querySelector(".btn2");
btn2.onclick = function () {
  location.href = "#sec02";
};
// location.href =
//   "https://developer.mozilla.org/en-US/docs/Learn/JavaScript#solving_common_javascript_problems";

console.log(location.host);
console.log(location.hostname);

console.log(location.hash);

console.log(location.protocol);

// console.log(location.reload());
// console.log(location.replace());
// console.log(location.assign());

console.log(location.pathname);

console.log(location.origin);
// ----------------------------------------------------------
/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Window Features [Opt], History Replace [Opt])
      method opens a new browser window, or a new tab, depending on your
      browser settings and the parameter values.
  - close()
      Scripts may close only the windows that were opened by them.
  - Window Features
  --- width [Num]
  --- heigth [Num]
  --- left [Num]
  --- top [Num]

  Search
  - Window.Open Window Features
    https://www.w3schools.com/jsref/met_win_open.asp
*/
// setTimeout(function () {
//   window.open(
//     "https://google.com",
//     "_blank",
//     "width=500,heigth=500,top=100,left=100"
//   );
// }, 3000);
// ----------------------------------------------------------
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// ----------------------------------------------------------
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
      method scrolls the document to specified coordinates.
      Accepte Negative Value
  - scroll(x, y || Options)  
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,heigth=500");

// window.scrollTo(500, 500);
let scroll = document.querySelector(".scroll");

scroll.onclick = function () {
  // window.scrollBy(-5000, -5000);
  // Options
  window.scrollBy({
    left: 500,
    top: 500,
    behavior: "smooth",
  });
};
// ----------------------------------------------------------
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
  */

let move = document.querySelector(".move");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    move.style.display = "block";
  } else {
    move.style.display = "none";
  }
};

move.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
