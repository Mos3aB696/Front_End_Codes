let ele = document.querySelector(".scroller");

let height = // Use This Way To Make Scroll Correctly
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  ele.style.width = `${(scrollTop / height) * 100}%`;
});
