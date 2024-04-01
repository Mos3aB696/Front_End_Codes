let switcherlis = document.querySelectorAll(".switcher li");
let images = Array.from(document.images);

switcherlis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImage);
});

// remove active class
function removeActive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
// remove all images
function manageImage() {
  images.forEach((img) => {
    img.style.display = "none";
  });

  document.querySelectorAll(this.dataset.works).forEach((ele) => {
    ele.style.display = "block";
  });
}
