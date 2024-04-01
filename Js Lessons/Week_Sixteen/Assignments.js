// ------------------------[Assign One]
// let myNumbers = [1, 2, 3, 4, 5];

// const [a, b, c, d, e] = myNumbers;

// console.log(a * e); // 5

// ------------------------[Assign Two]
// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];

// const [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// ------------------------[Assign Three]

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// let finalArr = arr1.concat(arr2, arr3);

// const [c, , , , , , , a, b] = finalArr;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// console.log(finalArr);

// // My Best Friends: Shady, Mahmoud, Ahmed

// ------------------------[Assign Four]

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// const {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, h2, h3],
// } = member;

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

// ------------------------[Assign Five]

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Way One
// const { title: t, developer: d, releases } = game;
// const [o, a, ori] = Object.keys(releases);
// const [u, j] = Object.values(releases[o]);
// const [u_price, j_price] = Object.values(releases[a]);
// const [or] = [Object.values(releases[ori]).join("")];

// Way Two
const { title: t, developer: d } = game;
const [o, a] = Object.keys(game.releases);
const [u, j] = Object.values(game.releases[o]);
const { US: u_price, JAP: j_price } = Object.values(game.releases[a]);
const { Origin: or } = game.releases;

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
