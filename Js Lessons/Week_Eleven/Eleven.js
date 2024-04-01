/*
  Object
  - Intro and what Is Object
  - Testing Window Object
  - Accessing Object
*/
let User = {
  // Properties
  theName: "Mos3aB",
  theAge: 21,
  theCountry: "Egypt",
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};
console.log(`${User.sayHello()} ${User.theName}`);
console.log(`Your Age is ${User.theAge}`);
console.log(`You come from ${User.theCountry}`);

//--------------------------------------------------
/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
    Means make a global variable, Its value is the property name in an object
    you can access in it with bracket notation  
*/
/*
  $ Property Name must be valid JavaScript identifier => Dot Notation,
  $ Otherwise, You must use => Bracket Notation
*/
/*
  Which to use?
    Use the Dot Notation. But if you're dealing with invalid identifier
    or variables, use the Bracket notation.
*/
let myVar = "country"; // Dynamic Property

let theUser = {
  theName: "Mos3aB",
  country: "Egypt",
};
console.log(theUser.theName);
// Use Double quote when access in valid string with Bracket Notation
console.log(theUser["theName"]);
console.log(theUser.country);
console.log(theUser[myVar]);
console.log(theUser.myVar);

//--------------------------------------------------
/*
  Object 
  - Nested Object And Trainings
*/
let user = {
  theName: "Mos3ab",
  theAge: 21,
  skills: ["Html", "Css", "js"],
  availabel: true,

  address: {
    us: "New York",
    eg: {
      one: "Cairo",
      two: "Alex",
    },
  },
  checkAvailablity: function () {
    return user.availabel === true ? `Job Free` : `Not Free`;
  },
};

document.write(`<h2>Hello ${user.theName},</h2>`);
document.write(`<p>Your Age Is : ${user.theAge}</p>`);
// You can use all Array methods and property
document.write(`<p>Your Skills are : ${user.skills.join(" | ")}</p>`);
document.write(`<p>Your Skill is : ${user.skills[2]}</p>`);
document.write(`<p>Your Address is : ${user.address.us}</p>`);
// You can use only Dot Notation or Bracket Notation or make mix between both
document.write(`<p>Your Address is : ${user["address"].eg.one}</p>`);
document.write(`<p>Your Address is : ${user["address"]["eg"]["two"]}</p>`);
document.write(`<h3>Status: ${user.checkAvailablity()}</h3>`);

//--------------------------------------------------
/*
  Object
  - Create With New Keyword new Object();
*/

let members = new Object({
  age: 19,
});

console.log(members);

members.theName = "Mos3aB";
members.age = 21;
members["country"] = "Egypt";
members.sayHi = function () {
  return `Hello`;
};
const memberss = {
  theName: "Elazazi",
};
const infos = new Object({
  theName: "Ali",
});
console.log(infos);
console.log(members);
console.log(`${members.sayHi()} ${members.theName}`);
console.log(`Your Age is => ${members["age"]}`);
console.log(`Your Country is => ${members.country}`);

/*
  The examples above do exactly the same.
  But there is no need to use new Object().
  For readability, simplicity and execution speed, use the object literal method.
*/

/*
  $ JavaScript Objects are Mutable
    Objects are mutable: They are addressed by reference, not by value.
*/
/*
  If info is an object,
  the following statement will not create a copy of info:
*/
let info = {
  theName: "Mos3aB",
  theAge: 21,
};
/*
  The Object x is Not A Copy of info. It is info.
  Both x and info are the same Object,
  So any changes to x will also change info
*/
let x = info;
x.theAge = 25;
console.log(info.theAge);
//--------------------------------------------------

/*
  Function this Keyword
  -  What is this?
    In JavaScript, the this keyword refers to an object.
    Which object depends on how this is being invoked (used or called).

  - this Alone
    When used alone, this refers to the global object.
    Because this is running in the global scope.

  - this Inside Object Mathod
  --- When a function is called as a method of an object,
  --- It's this is set to the object is called on 

  - Global Object
    $ In a browser window the global object is [object Window]

  - Test Variables with window and this

  - Global Context
    $ In the global execution context (outside of any function), 
    this refers to the global object whether in strict mode or not.

  
  - Function Context
    $ Inside a function, the value of this depends on how the function is called.

  Search
  - Strict Mode
  $ In strict mode, when used alone, this also refers to the global object
  $  when used in a function, in strict mode, this is undefined.
*/

// Global Context
a = 34;
console.log(this.a);
this.b = 50;
console.log(b);
console.log(this.b);

console.log(this);
console.log(this === window);

Var = 100;

console.log(window.Var);
console.log(this.Var);

function say() {
  console.log(this);
  return this;
}
say();
console.log(say());

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let person = {
  age: 21,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(person.age);
console.log(person.ageInDays());

//--------------------------------------------------
/*
  Object
  - Creat Object with create method
  Object.create(existing object name)
  $ method creates a new object, using an existing object as
    the prototype of the newly created object.
*/

// You use this here to make it search about the Method (theAge) in his Parent
let thePerson = {
  theAge: 21,
  height: 150,
  doubleAge: function () {
    return this.theAge * 2;
  },
};
console.log(thePerson);
console.log(thePerson.theAge);
console.log(thePerson.doubleAge());
// Object to use as a prototype. May be null.
let copyObj = Object.create(thePerson);
copyObj.theAge = 30;
console.log(copyObj);
console.log(copyObj.theAge);
console.log(copyObj.doubleAge());

// May be null.
let Obj = Object.create({});
Obj.a = 110;
console.log(Obj);
console.log(thePerson);

/*
Deleting Properties
$ The delete keyword deletes a property from an object
$ The delete keyword deletes both the value of the property and the property itself
$ After deletion, the property cannot be used before it is added back again
$ The delete operator is designed to be used on object properties.
It has no effect on variables or functions.
$ The delete operator should not be used on predefined JavaScript object 
properties. It can crash your application.
*/

let del = {
  carName: "BMW",
  model: 2022,
  country: "Egypt",
  price: {
    one: 200,
    two: 100,
  },
  changePrice: function () {
    return this.country === "Egypt" ? this.price.one : this.price.two;
  },
};
delete del.model;
console.log(del);
console.log(del.model);
delete del.changePrice;
console.log(del.changePrice);

//--------------------------------------------------
/*
  Object
  - Creat Object with assign method
  The target object to copy to.
    Copy the values of all of the enumerable own properties from 
    one or more source objects to a target object. Returns the target object.
*/

let obj1 = {
  prop1: 1,
  math1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  math2: function () {
    return this.prop2;
  },
};

let obj3 = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(obj1, obj2, obj3);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj2, { prop5: 5, prop6: 6 }, { prop7: 7 });
console.log(newObject);

let testOne = {
  one: 1,
};
let testTwo = {
  two: 2,
};
let allTests = Object.assign(testOne, testTwo);
console.log(testOne);
console.log(testTwo);
console.log(allTests);
//--------------------------------------------------

/*
  What the maea differance between Object.assign() and Object.create()
  $ Object.create() method creates a new Object. This new Object uses
    the Object specified in the create method as the prototype to this new Object. 

  $ Object.assign() on the other hand simply copies all the properties from 
    the specified object to the specified target Object and simply returns that
    new Object.
*/
