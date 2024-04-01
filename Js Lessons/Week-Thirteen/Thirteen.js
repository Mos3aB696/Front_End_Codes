/*
  DOM [Events Simulation]
  - click
  - focus
  - blur 
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};
//-----------------------------------------------------
/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let ele = document.getElementById("my_div");
// property returns the CSS classnames of an element.
console.log(ele);
console.log(ele.classList);
// Returns the number of tokens.
console.log(ele.classList.length);
// Returns true if token is present, and false otherwise.
console.log(ele.classList.contains("Mos3aB"));
console.log(ele.classList.contains("test"));
// Returns the token at a specified index
console.log(ele.classList.item(2));
ele.onmouseenter = function () {
  // Adds the specified tokens to the list.
  this.classList.add("Mos3aB", "one");
};
ele.onmouseleave = function () {
  // Removes the specified tokens from the list.
  this.classList.remove("test", "one");
};
ele.onclick = function () {
  // Removes the token from the list if it exists, or adds it to the list if it doesn't.
  this.classList.toggle("Nothing");
  // Replaces the token with another one.
  this.classList.replace("Mos3aB", "Elzero");
};

//-----------------------------------------------------
/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/
ele.style.color = "red";
// use camelCase
ele.style.fontWeight = "bold";
// this make override on all css style before it
ele.style.cssText =
  "font-size: 40px; font-weight: bold; color:green; opacity:0.5 ";
// set and remove in inline style sheet
ele.style.removeProperty("font-size");
ele.style.setProperty("font-style", "italic", "important");
ele.style.setProperty("font-style", "none");
// set and remove in external style sheet
document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
document.styleSheets[0].cssRules[0].style.setProperty(
  "background-color",
  "red"
);
//-----------------------------------------------------
/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let myElement = document.getElementById("my-div");
let createP = document.createElement("p");
// method inserts a set of Node or string objects in the children list of this Element's parent, just before this Element
myElement.before("Hello to javaScript");
//  method inserts a set of Node or string objects in the children list of the Element's parent, just after the Element
myElement.after("Hello to javaScript");
//  method inserts a set of Node objects or string objects after the last child of the Element
myElement.append(" Hello Mos3aB");
// method inserts a set of Node objects or string objects before the first child of the Element
myElement.prepend("Hello Zero ");
// Removes node.
// myElement.remove();
//-----------------------------------------------------
/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".my-div .two");
// Returns the next sibling.
console.log(span.nextSibling);
// Returns the previous sibling.
console.log(span.previousSibling);
// Returns the first following sibling that is an element, and null otherwise.
console.log(span.nextElementSibling);
// Returns the first preceding sibling that is an element, and null otherwise.
console.log(span.previousElementSibling);
// Returns the parent element.
console.log(span.parentElement);

span.onmouseenter = function () {
  span.parentElement.style.cssText =
    "color: red; opacity: 0.5; font-size: 20px; background-color: blue; transition: 1s";
  // span.previousElementSibling.remove();
  span.nextElementSibling.style.cssText =
    "color: blue; background-color: yellow; transition: 1s";
};
span.onmouseleave = function () {
  span.parentElement.style.cssText = "none";
  span.nextElementSibling.style.cssText = "none";
};
//---------------------------------------------------
/*  
  DOM [cloning]
  - cloneNode(Deep)

  Cloning a node copies all of its attributes and their values,
  including intrinsic (inline) listeners. It does not copy event listeners
  added using addEventListener() or those assigned to element properties 
  (e.g., node.onclick = someFunction). Additionally, for a <canvas> element,
  the painted image is not copied.

  Returns a copy of node. If deep is true, the copy also includes 
  the node's descendants.

  The new Node cloned. The cloned node has no parent and is not part of the document,
  until it is added to another node that is part of the document, 
  using Node.appendChild() or a similar method.

*/
let myP = document.getElementById("my-p").cloneNode(true);
// myP.onclick = function () {
//   console.log("Clicked");
// };
let myDiv = document.querySelector(".div");

myDiv.appendChild(myP);
//-----------------------------------------------------
/*
  DOM [Add Event Listener]
  - addEventListener
  - use without on
  - Attach multiple events
  - Error test 

  Search
  - Capture & Bubbling Js
  - removeEventListener
*/

let Ele = document.querySelector(".my_p");
Ele.onclick = cloTwo;

function cloOne() {
  console.log("Clicked Clone 1");
}
function cloTwo() {
  console.log("Clicked Clone 2");
}

Ele.addEventListener("click", function () {
  console.log("Clicked Clone 1 Event");
});
Ele.addEventListener("click", cloTwo);
Ele.addEventListener("click", cloOne);

let ElE = document.getElementById("my_p");

ElE.onclick = function () {
  let newP = ElE.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

document.addEventListener("click", function (event) {
  // Returns the object to which event is dispatched (its target).
  if (event.target.className === "clone") {
    console.log("Iam Cloned");
  }
});
//-----------------------------------------------------
/*
  What is event Bubbling and capturing in JavaScript?
    Event bubbling is the order in which event handlers are called when one
    element is nested inside a second element, and both elements have registered 
    a listener for the same event (a click, for example). With bubbling, 
    the event is first captured and handled by the innermost element 
    and then propagated to outer elements.

    With capturing, the event is first captured by the outermost element and
    propagated to the inner elements.
*/
let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");

outer.addEventListener(
  "click",
  function () {
    outer.style.cssText = "color: blue; background-color: red";
    console.log("outer div is clicked");
  },
  true
);

inner.addEventListener(
  "click",
  function () {
    inner.style.cssText = "color: red; background-color: black";
    console.log("inner div is clicked");
  },
  true
);
