// Get Main Variables
let imagesSlider = Array.from(
  document.querySelectorAll(".images-container img")
);
let sliderCount = imagesSlider.length;
let slideNumber = document.querySelector(".slide-number");

let previousButton = document.querySelector(".previous");
let indicators = document.querySelector(".indicators");
let nextButton = document.querySelector(".next");
// Set Current Slide Number
let currentSlide = 1;

previousButton.onclick = prevButton;
nextButton.onclick = nxButton;

// Create Ul and Li
let ulEle = document.createElement("ul");
ulEle.setAttribute("id", "uls");
for (let i = 1; i <= sliderCount; i++) {
  let lisElement = document.createElement("li");
  lisElement.setAttribute("data-index", i);
  // lisElement.className = "lis";
  lisElement.appendChild(document.createTextNode(i));
  // Appending lisElement Inside ulEle
  ulEle.appendChild(lisElement);
}
// Appending ulEle Insdie Indicators
indicators.appendChild(ulEle);

let getUlEle = document.getElementById("uls");
let lisArray = Array.from(document.querySelectorAll("#uls li"));

// Make Loop To Change currentSlide Number
for (let i = 0; i < lisArray.length; i++) {
  lisArray[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

// Trigger Checker Function
checker();

function prevButton() {
  if (currentSlide == 1) {
  } else {
    currentSlide--;
    checker();
  }
}
function nxButton() {
  if (currentSlide == sliderCount) {
  } else {
    currentSlide++;
    checker();
  }
}

// Create Checker Function

function checker() {
  slideNumber.textContent = `${currentSlide} Of ${sliderCount}`;
  // Remove Active Classes
  removeAllActive();
  // Add Active Class To Image
  imagesSlider[currentSlide - 1].classList.add("active");
  // Add Active Class To Li
  getUlEle.children[currentSlide - 1].classList.add("active");
  // Add Disable Class
  currentSlide == 1
    ? previousButton.classList.add("disable")
    : previousButton.classList.remove("disable");
  currentSlide == sliderCount
    ? nextButton.classList.add("disable")
    : nextButton.classList.remove("disable");
}

// Remove Active Function
function removeAllActive() {
  // Remove From Images
  imagesSlider.forEach((ele) => {
    ele.classList.remove("active");
  });
  // Remove From Indicators
  lisArray.forEach((li) => {
    li.classList.remove("active");
  });
}
