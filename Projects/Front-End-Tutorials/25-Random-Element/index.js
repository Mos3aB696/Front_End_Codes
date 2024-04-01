let arr = ["Mos3aB", "Ahmed", "Ali", "Ibrahim"];

console.log(Math.trunc(Math.random() * arr.length));

console.log(arr[Math.trunc(Math.random() * arr.length)]);
document.querySelector(".winner").innerHTML =
  arr[Math.trunc(Math.random() * arr.length)];
