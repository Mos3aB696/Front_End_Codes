let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    console.log("Reached");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
