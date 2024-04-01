document.body.style.background = "#333";
document.body.style.color = "#eee";
let c = console.log;

let countDownDate = new Date("May 3, 2023").getTime();
c(countDownDate);
let counter = setInterval(() => {
  // Get Date Now
  let dateNow = Date.now();
  // the Differance
  let dateDiff = countDownDate - dateNow;
  // Get time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff == 0) {
    clearInterval(counter);
  }
}, 1000);
