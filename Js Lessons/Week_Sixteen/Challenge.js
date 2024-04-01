/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Mos3aB", age: 21, available: true, skills: ["PHP", "JS"] },
];

if (chosen == 1) {
  const [
    {
      title,
      age,
      available,
      skills: [, last],
    },
  ] = myFriends;
  console.log(title);
  console.log(age);
  if (available === true) {
    console.log("Available");
  } else console.log("Not Available");
  console.log(last);
}

if (chosen == 2) {
  [
    {
      skills: [, ,],
    },
    {
      title,
      age,
      available,
      skills: [, last],
    },
  ] = myFriends;

  console.log(title);
  console.log(age);
  if (available === true) {
    console.log("Available");
  } else console.log("Not Available");
  console.log(last);
}

if (chosen == 3) {
  [
    {
      skills: [, ,],
    },
    {
      skills: [, ,],
    },
    {
      title,
      age,
      available,
      skills: [, last],
    },
  ] = myFriends;
}
console.log(title);
console.log(age);
if (available === true) {
  console.log("Available");
} else console.log("Not Available");
console.log(last);
