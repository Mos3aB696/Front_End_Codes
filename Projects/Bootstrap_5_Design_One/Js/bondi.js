/** Go Up Button */
let servicesSection = document.querySelector(".services");
let upBtn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= servicesSection.offsetTop - 200) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
};
AOS.init({
  delay: 0,
  duration: 1200,
  once: false,
});
