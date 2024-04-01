document.body.style.background = "rgb(49 45 45)";
// --------------------[Assign One]
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}

let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("BMW", 2019, 1500000);
let carThree = new Car("Toyota", 2020, 560000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);
console.log(carOne.run());
// --------------------[Assign Two]
class Phone {
  constructor(name, serial, price) {
    this.n = name;
    this.s = serial;
    this.p = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "UnKnown";
  }
  fullDetails() {
    return `${this.n} Serial is ${this.s} And Size is ${this.size}`;
  }
}

let tabletOne = new Tablet("iPad", 100200300, 20000, 12.9);
let tabletTwo = new Tablet("Nokia", 350450650, 10000, 10.5);
let tabletThree = new Tablet("LG", 250450650, 5000);

console.log(tabletOne.fullDetails());
console.log(tabletTwo.fullDetails());
console.log(tabletThree.fullDetails());
// --------------------[Assign Three]
class User {
  #user;
  #card;
  constructor(userName, card) {
    this.#user = userName;
    this.#card = card;
  }

  get craditcard() {
    return this.#card.toString().match(/\d{4}/g).join("-");
  }

  showData() {
    return `Hello ${this.#user} Your Credit Card Number Is ${this.craditcard}`;
  }
}

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData());
console.log(userTwo.showData());
console.log(userThree.showData());
console.log(userOne.c);
// --------------------[Assign Four]
String.prototype.addLove = function (val) {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
// --------------------[Assign Five]
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
  country: {
    enumerable: false,
    configurable: true,
  },
});
delete myObj.country;
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}
console.log(myObj);
