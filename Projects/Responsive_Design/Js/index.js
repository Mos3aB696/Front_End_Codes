/** Start Our Gallery */
let boxesArr = Array.from(document.querySelectorAll(".the-boxes .box "));
let ourGallerySection = document.querySelector(".our-gallery ");
window.onscroll = function () {
  if (window.scrollY >= ourGallerySection.offsetTop - 400) {
    boxesArr.forEach((box) => {
      box.style.display = "block";
    });
  }
};
/** End Our Gallery */

/** Start Our Product */
let tabsArr = Array.from(document.querySelectorAll(".tabs li"));
let divsArr = Array.from(document.querySelectorAll(".content div"));

tabsArr.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // Remove All Active Classes
    tabsArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    // Add Class Active To Current Element
    e.target.classList.add("active");

    // Remove All Divs
    divsArr.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.target.dataset.cont);
    document.querySelector(e.target.dataset.cont).style.display = "flex";
  });
});
/** End Our Product */
