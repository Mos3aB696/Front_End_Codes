let colorEle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorArr = [];

for (let i = 0; i < 6; i++) {
  colorArr.push(colorEle[Math.floor(Math.random() * colorEle.length)]);
}
textcolor = `#${colorArr.join("")}`;
finialColor = `#${colorArr.join("")}`;
console.log(finialColor);
document.body.style.background = finialColor;
