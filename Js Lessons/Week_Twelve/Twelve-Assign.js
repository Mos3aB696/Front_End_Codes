document.querySelector("body").style.backgroundColor = "#ddd";
//--------------------[Assign One]

let way1 = document.getElementById("elzero");
let way2 = document.getElementsByClassName("element");
let way3 = document.getElementsByTagName("div");
let way4 = document.getElementsByName("js");
let way5 = document.querySelector(".element");
let way6 = document.querySelector("#elzero");
let way7 = document.querySelector("[name='js']");
let way8 = document.querySelector("div");
let way9 = document.querySelectorAll("div");
let way10 = document.querySelectorAll(".element");
let way11 = document.querySelectorAll("#elzero");
let way12 = document.querySelectorAll("[name='js']");
console.log(way8);
//--------------------[Assign Two]

let images = document.querySelectorAll(".groupOneImages img");
// document.images[0].src =
//   "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";

for (let i = 0; i < 10; i++) {
  document.images[i].setAttribute("alt", "Elzero Logo");
  document.images[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
}
console.log(images[9]);

//--------------------[Assign Three]
let inputValue = document.querySelector("[type='number']");
let dollarValue = document.querySelector(".dollarValue");
let poundValue = document.querySelector(".poundValue");

inputValue.oninput = function () {
  let finalResult = inputValue.value;
  dollarValue.textContent = finalResult;
  poundValue.textContent = (finalResult * 19.22).toFixed(2);
};

//--------------------[Assign Four]
let firstElement = document.querySelector(".one");
let secondElement = document.querySelector(".two");
// Normal Way
firstElement.setAttribute("title", "One");
firstElement.innerHTML = "One";
secondElement.setAttribute("title", "Two");
secondElement.innerHTML = "Two 2";
// Elzero Way
firstElement.title = firstElement.className;
firstElement.textContent = firstElement.className;
secondElement.title = secondElement.className;
secondElement.textContent =
  secondElement.className + " " + secondElement.attributes.length;

console.log(firstElement);
console.log(secondElement);

//--------------------[Assign Five]

let allImages = document.querySelectorAll(".groupTwoImages img");
for (let i = 0; i <= allImages.length; i++) {
  allImages[i].alt !== ""
    ? (allImages[i].alt = "Old")
    : (allImages[i].alt = "Elzero New");
}
//--------------------[Assign Six]

//--------------------[Know Time]

let setTime = document.querySelector(".timeButton");
let theTime = document.querySelector("#showTime");

setTime.onclick = function () {
  theTime.innerHTML = Date();
};
