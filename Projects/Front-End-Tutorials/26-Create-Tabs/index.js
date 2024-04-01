let tabs = document.querySelectorAll(".tabs li");
let tabsArr = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArr = Array.from(divs);

tabsArr.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    // Remove active Class
    tabsArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    // Add active class for clicked tab
    e.currentTarget.classList.add("active");
    // Remove Content in click
    divsArr.forEach((div) => {
      div.style.display = "none";
    });
    // Show Content for Clicked tab
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
