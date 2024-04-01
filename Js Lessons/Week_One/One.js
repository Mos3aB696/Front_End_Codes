// This is Frist Way =>
console.log("Iam In Console");
document.write("Iam In Page");

/* This is Second Way */
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

//---------------------------------------------
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group Two");
console.log("Message One");
console.log("Message Two");
// --------------------------------------------
console.table(["Elzero", "Mos3aB", "Ahmed", "Sara", "Aye"]);
// --------------------------------------------
console.log(
  "%cElzero %cweb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-weight: bold; font-size: 40px",
  "color: white; background: blue; font-size: 40px; padding: 4px;"
);
// --------------------------------------------
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.family = "arial";

//---------------[Another Way]---------------
document.write("<h2>Elzero</h2>");
document.querySelector("h2").style.cssText = `
color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-famliy: arial;
`;
