let input = document.querySelector("input");
let progress = document.querySelector(".progress");
let count = document.querySelector(".count");
let maxLength = input.getAttribute("maxLength");

count.innerHTML = maxLength;

input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");

  // Set Progress
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};
