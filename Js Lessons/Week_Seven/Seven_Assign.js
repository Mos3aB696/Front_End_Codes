document.querySelector("body").style.background = "#333";
document.querySelector("body").style.color = "white";
// ------------------[Assignments For Lessons 48 To 53]-------------------------
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i += start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }

// ---------------------------------------------------------
// let start = 10;
// let end = 0;
// let stops = 3;

// for (let i = start; i >= stops; i -= 1) {
//   if (i === start) {
//     console.log(start);
//   } else {
//     console.log(`${end}${i}`);
//   }
// }
// ---------------------------------------------------------
// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {
//   console.log(i);
//   console.log(`-- ${breaker}`);
//   console.log(`-- ${end - breaker}`);
// }
// ---------------------------------------------------------

// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   console.log(index);
//   if (index === jump * jump) break;
//   index -= jump;
// }

// ---------------------------------------------------------

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let count = true - true;

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i].startsWith(letter.toUpperCase()) === true) continue;
//   console.log(`"${++count} => ${friends[i]}`);
// }
// ---------------------------------------------------------

// let start = 0;
// let swappedName = "elZerO";
// let swappedName2 = swappedName.toUpperCase();
// let End = "";

// for (let i = start; i < swappedName.length; i++) {
//   if (swappedName[i] === swappedName2[i]) {
//     End += swappedName[i].toLowerCase();
//   } else {
//     End += swappedName[i].toUpperCase();
//   }
// }
// console.log(End);

// ---------------------------------------------------------

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start; i < mix.length; i++) {
//   if (typeof mix[i] === "string") continue;
//   if (mix[i] === mix[start]) continue;
//   console.log(mix[i]);
// }

// ------------------[Assignments For Lessons 54 To 56]-------------------------
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// for (let i = 0; i < 5; i++) {
//   console.log(friends[i]);
// }

// while (index < friends.length) {
//   index++;
//   if (
//     typeof friends[index] == "number" ||
//     friends[index].startsWith("A") == true
//   )
//     continue;
//   console.log(`"${++counter} => ${friends[index]}`);
// }

while (counter < friends.length - index.toString().length) {
  counter++;
  if (
    typeof friends[counter] == "number" ||
    friends[counter].charAt(index) == "A"
  )
    continue;
  console.log(friends[counter]);
}
