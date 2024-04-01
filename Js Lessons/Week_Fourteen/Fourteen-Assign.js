// -----------------[Assign One]
let propNum = prompt("Print Number From – To", "Example: 5-20");
let counter = propNum.split("-").sort((a, b) => a - b);
let count = setInterval(function () {
  let result = document.createElement("div");
  result.innerHTML = counter[0]++;
  if (result.innerHTML == counter[1]) {
    clearInterval(count);
  }
  document.body.appendChild(result);
}, 500);

// -----------------[Assign Two]
let container = document.querySelector(".container");
let close = document.querySelector(".close");

let event = (window.onload = setTimeout(function () {
  container.style.display = "block";
}, 5000));
close.onclick = function () {
  container.style.display = "none";
};
// -----------------[Assign Three]
let countDown = document.querySelector(".countDown");

let countEvent = setInterval(function () {
  countDown.innerHTML -= 1;
  if (countDown.innerHTML === "0") {
    clearInterval(countEvent);
  }
}, 1000);
// -----------------[Assign Four]

// let openPage = setInterval(function () {
//   // countDown.innerHTML -= 1;
//   if (countDown.innerHTML === "5") {
//     location.href = "https://elzero.org";
//   }
// }, 1000);
// -----------------[Assign Five]
// let openPageExternal = setInterval(function () {
//   // countDown.innerHTML -= 1;
//   if (countDown.innerHTML === "5") {
//     open("https://elzero.org", "", "width=200,heigth=200,top=20,left=20");
//   }
// }, 1000);
