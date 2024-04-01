/*
  DOM 
  - What is DOM
    => Document Object Model
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By Css Selectors
  --- Find Element By Collection
  ------ title
  ------ body 
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElements = document.getElementsByClassName("my-span");
// When use querySelector, The only first Element will be show.
let myQueryElement = document.querySelector("span");
// When use querySelectorAll, All Elements will be show.
let myQueryElements = document.querySelectorAll("span");

console.log(myIdElement.innerHTML);
// You can change content inner Element =>

myIdElement.innerHTML = "Mos3aB";
console.log(myTagElements);
// You can make access in one of your Element by index
console.log(myTagElements[0]);
console.log(myClassElements);
console.log(myQueryElement);
console.log(myQueryElements);
// Contains the title of the document.
console.log(document.title);
// Contains the title of the document.
console.log(document.body);

console.log(document.forms[1].two.value);
document.forms[1].two.value = "Your Email Here";
console.log(document.forms[1].two.value);

console.log(document.links[1].innerHTML);

console.log(document.links[0].href);

//- -----------------------------------------------------
/*
  DOM[Get / Set Element Content And Attributes]
  - innerHTML =>
      property sets or returns the HTML content (inner HTML) of an element.
  - textContent => 
      property sets or returns the text content of the specified node, 
      and all its descendants.
  - Change Attrributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

// myElement.innerText = "Mos3aB";
// myElement.innerHTML = "Text From <span>Tweleve.js</span>";
myElement.textContent = "Text From <span>Tweleve.js</span>";
console.log(myElement.innerHTML);
console.log(myElement.textContent);
console.log(myElement.innerText);

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternat Image";
// If the Attribute does not definded, it will be creating.
document.images[0].id = "pic";
document.images[0].className = "thePic";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://facebook.com");
myLink.setAttribute("titel", "Facebook");
console.log(myLink.innerHTML);
myLink.innerHTML = "Facebook";

// /*
// - The Differences Between
// --innerHTML, innerText and textContent
// The innerHTML property returns:
//    The text content of the element, including all spacing and inner HTML tags.
// The innerText property returns:
//    Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
// The textContent property returns:
//     The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags.
// */

let theElement = document.querySelector(".difference");
console.log(theElement.innerHTML);
console.log(theElement.innerText);
console.log(theElement.textContent);
// //- -----------------------------------------------------
// /*
//   DOM [Check Attributes]
//   - Element.attributes
//   - Element.hasAttribute
//   - Element.hasAttributes
//   - Element.removeAttribute
// */

let myP = document.querySelector(".para");

myP.removeAttribute("class");

console.log(myP.hasAttributes());

console.log(myP.attributes[0]);

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log("Not Found");
}

myP.hasAttributes() ? console.log(true) : console.log(false);

if (document.getElementsByTagName("div")[3].hasAttributes()) {
  console.log("Has Attributes");
} else {
  console.log("Has not Attributes");
}

//- -----------------------------------------------------

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/
let mainElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is Div");

mainElement.className = "Product One";
mainElement.id = "Product One";
mainElement.setAttributeNode(myAttr);
mainElement.setAttribute("data-test", "Testing");

// Append Comment to Element
mainElement.appendChild(myComment);
// Append Text To Element
mainElement.appendChild(myText);
// Append Element To Body
document.body.appendChild(mainElement);
console.log(mainElement);

//- -----------------------------------------------------
/*
  DOM [Create Elements]
  - Practice Product with Heading And Paragraph
*/

//- -----------------------------------------------------
/*
  DOM [Deal with chiderens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElemnetChild
  - lastElementChild
*/

let chilElement = document.querySelector("#child_test");

console.log(chilElement);
// Returns the child elements.
console.log(chilElement.children);
// Returns the children.
console.log(chilElement.childNodes);
console.log(chilElement.childNodes[0]);
// Returns the first child.
console.log(chilElement.firstChild);
// Returns the last child.
console.log(chilElement.lastChild);
// Returns the first child that is an element, and null otherwise.
console.log(chilElement.firstElementChild);
// Returns the last child that is an element, and null otherwise.
console.log(chilElement.lastElementChild);
//- -----------------------------------------------------
/*
  DOM [Events]
  - Use Events On Html
  - Use Events On Js
  --- onclick => 
          Fires when the user clicks the left mouse button on the object
          You can use it as Attribute in html element or in js page 
  --- oncontextmenu
          Fires when the user clicks the right mouse button in the client area, 
          opening the context menu.
  --- onmouseenter
          Fires when the user make hover by mouse on button
  --- onmouseleave
          Fires when the user make hover then leave it by mouse on button

  --- onload
          The browser has finished loading the page
  --- onscroll
          Fires when the user repositions the scroll box in the scroll bar on the object.
  --- resize
          Fires when the browser window has been resized.

  --- onfocus
          Fires when an element gets focus.
  --- onblur 
          Fires when an object loses focus.
  --- onsubmit
          Fires when a form is submitted.
*/

let myBtn = document.getElementById("btn");

// myBtn.oncontextmenu = function () {
//   console.log("Right Click");
// };
myBtn.onmouseenter = function () {
  console.log("Mouse Enter");
};
myBtn.onmouseleave = function () {
  console.log("Mouse Leave");
};

window.onscroll = function () {
  console.log("Scrolling");
};
window.onresize = function () {
  console.log("Resizing");
};

//- -----------------------------------------------------
/*
  DOM [Events]
  - Validate Form Practice
  - PreventDefault
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[1].onsubmit = (event) => {
  let userValid = false;
  let ageValid = false;

  if (userInput !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    event.preventDefault();
  }
};

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
  /*
  method cancels the event if it is cancelable, meaning that the default
  action that belongs to the event will not occur.
  */
};
//- -----------------------------------------------------

// Create li Element
let newLi = document.createElement("li");
// Create a liText
let liText = document.createTextNode("Water");
// Append liText to li Elements
newLi.appendChild(liText);
// Insiert Before existing child:
let list = document.getElementById("my_list");
list.insertBefore(newLi, list.children[0]);
//  method inserts a child node before an existing child.
console.log(list);
// Use replaceChild
let replaceEle = document.createTextNode("Colla");
list.replaceChild(replaceEle, list.children[0]);
