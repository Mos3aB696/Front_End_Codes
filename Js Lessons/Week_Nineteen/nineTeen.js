document.body.style.background = "rgb(49 45 45)";
// /*
//   Constructor Function
//   - New Syntax
// */

// // Best practise to make first litter in function name => Uppercase
// // Old Syntax
// function User(id, userName, salary) {
//   this.i = id;
//   this.u = userName;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, "Elzero", 10000);
// let userTwo = new User(101, "Mos3aB", 8000);
// let userThree = new User(102, "Ali", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);

// let userOne = {
//   id: 100,
//   userName: "Elzero",
//   salary: 10000,
// };

// let userTwo = {
//   id: 101,
//   userName: "Mos3aB",
//   salary: 8000,
// };

// let userThree = {
//   id: 102,
//   userName: "Ali",
//   salary: 5000,
// };

//----------------------------------------------------

// New Syntax  ES6
// class UserInfo {
//   constructor(userName, age, country) {
//     this.name = userName;
//     this.age = age;
//     this.country = country;
//   }
// }

// const one = new UserInfo("Mos3aB", 21, "Egypt");
// console.log(one.name);
// console.log(one.age);
// console.log(one.country);

// console.log(one instanceof UserInfo);
// console.log(one.constructor);
// console.log(one.constructor === UserInfo);
//----------------------------------------------------
/*
  Constructor Function
  - Deal with properties and methods
*/
// class TheUser {
//   constructor(name, salary) {
//     // properties
//     this.n = name || "Unknown";
//     this.s = salary < 5000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello, ${this.n} Your Salary is ${this.s}`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello, ${this.n} Your Salary is ${this.s}`;
//   }
// }
// let userInfoOne = new TheUser("Mos3aB", 5000);
// let userInfoTwo = new TheUser("Ahmed", 4000);

// console.log(userInfoOne.n);
// console.log(userInfoOne.s);
// console.log(userInfoOne.msg());
// console.log(userInfoTwo.writeMsg());

// console.log(userInfoTwo.n);
// console.log(userInfoTwo.s);
// // without parentheses => Native Code
// console.log(userInfoTwo.msg);
// console.log(userInfoTwo.writeMsg);
//----------------------------------------------------
/*
  Constructor Function
  - Update Properties
  - Bulit In Constructor

  Primitive Values vs Object
    *Primitive vs. Object: The key difference here is that numOne is a primitive number,
      while numTwo is an object that wraps around a number. Primitive values in JavaScript
      (like numbers, strings, booleans, etc.) are simpler and more lightweight than objects. Objects,
      including those created by constructors like Number, have more functionality and complexity but also more overhead.

    * Use Cases: Choosing between a primitive number and a Number object depends on the specific needs of your program.
      If you need the additional methods provided by the Number object (like rounding, converting to string, etc.),
      then using the Number constructor makes sense. Otherwise, for simple numeric operations,
      primitive numbers are preferred due to their simplicity and performance advantages.

    * Key Differences
      * Immutability: Primitive values are immutable, meaning once they are created, their value cannot change.
        Objects are mutable, allowing their properties to be changed after creation.
      * Storage: Primitive values are stored on the stack, whereas objects are stored on the heap.
      * Value: Primitive values have a single value, while objects can have multiple properties (values).
      * Methods: Only objects can have methods (functions).
 */

// class Data {
//   constructor(name, title) {
//     this.n = name;
//     this.t = title;
//   }
//   // Methods
//   updateName(newName) {
//     this.n = newName;
//   }
//   updateTitle(newTitle) {
//     this.t = newTitle;
//   }
// }

// let empOne = new Data("Mos3aB", "Front End Developer");
// console.log(empOne.n);
// console.log(empOne.t);
// empOne.updateTitle("Full Stack Engineer");
// console.log(empOne.n);
// console.log(empOne.t);
// // String
// let strOne = "Mos3aB";
// let strTwo = new String("Mos3aB");
// console.log(typeof strOne); // String
// console.log(typeof strTwo); // Object

// console.log(strOne instanceof String); // false
// console.log(strTwo instanceof String); // true

// console.log(strOne.constructor === String); // true
// console.log(strTwo.constructor === String); // true

// // Number
// let numOne = 2022;
// let numTwo = new Number(2022.23);

// console.log(typeof numOne); // Number
// console.log(typeof numTwo); // Object

// console.log(numOne instanceof Number); // false
// console.log(numTwo instanceof Number); // true
// console.log(numTwo.toFixed()); // 2022

// console.log(numOne.constructor === Number); // true
// console.log(numTwo.constructor === Number); // true
//----------------------------------------------------------------
/*
  Class
  - Static Properties And Methods
    The static keyword defines a static method or property for a class

    Neither static methods nor static properties can be called on instances of the class.
    Instead, they're called on the class itself.
*/

// class Static {
//   static count = 0;
//   constructor(id, userName) {
//     this.id = id;
//     this.userName = userName;
//     Static.count++;
//   }
//   static sayHello() {
//     return `Hello From Class`;
//   }

//   static countMembers() {
//     return `${this.count} Members Created`;
//   }
// }
// class StaticTwo extends Static {
//   static count = 0;
//   super(id, userName, countMembers) {
//     StaticTwo.count++;
//   }
// }
// let personOne = new Static(1, "Elzero");
// let personTwo = new Static(2, "Mos3aB");
// let personThree = new Static(3, "Sayed");
// console.log(personOne.userName);
// console.log(personTwo.userName);

// console.log(personOne.count); // Can't Access => Undefined
// console.log(Static.count); // Can Access => 0

// // console.log(personOne.sayHello());// => Error
// console.log(Static.sayHello());

// console.log(Static.countMembers());

// const perOne = new StaticTwo(100, "Mos3aB");
// const perTwo = new StaticTwo(101, "Osama");

// console.log(perOne.id);
// console.log(perOne.userName);
// console.log(StaticTwo.countMembers());
// //----------------------------------------------------------------
/*
  Class
  - Inheritance
    The JavaScript inheritance is a mechanism that allows us to create new
    classes on the basis of already existing classes. It provides flexibility
    to the child class to reuse the methods and variables of a parent class.
*/

// class EmpInfo {
//   constructor(name, age) {
//     this.n = name;
//     this.a = age;
//   }
//   sayHello() {
//     return `Hello ${this.n} You Are New Employer Here`;
//   }
// }
// We use the extends keyword to say that this class inherits from another class
// The super() method refers to the parent class.
/*
  By calling the super() method in the constructor method,
  we call the parent's constructor method and gets access
  to the parent's properties and methods.

  Note
  Inheritance is useful for code reusability: reuse properties and methods
  of an existing class when you create a new class.
*/
// class Admin extends EmpInfo {
//   constructor(name, age, permissions) {
//     super(name, age);
//     this.p = permissions;
//   }
//   sayHello() {
//     return `Hello ${this.n} You Are Admin Here With Full Permissions`;
//   }
// }

// class SuperMan extends Admin {
//   constructor(name, age, ability) {
//     super(name, age);
//     this.ab = ability;
//   }
//   sayHello() {
//     return `Hello ${this.n} You Are Super Employer Here`;
//   }
// }

// let newEmp = new EmpInfo("Ahmed", 25);
// let adminOne = new Admin("Elzero", 40, "Full Permissions");
// let superMan = new SuperMan("Mos3aB", 21, 1);

// console.log(newEmp.n);
// console.log(newEmp.sayHello());

// console.log("$".repeat(10));

// console.log(adminOne.n);
// console.log(adminOne.a);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());
// console.log("$".repeat(10));

// console.log(superMan.n);
// console.log(superMan.a);
// console.log(superMan.ab);
// console.log(superMan.sayHello());
//----------------------------------------------------------------
/*
  Encapsulation
  The main advantage of using encapsulation in JavaScript is to provide security
  to the data. Other benefits of encapsulation include:
  - Class fields are public by default
  - Guards the data against illegal access
  - Helps to achieve the target without revealing its complex details
  - Will reduce human errors
  - Make the app more flexible and manageable
  - Simplifies the app

  Conclusion
    Encapsulation is the tool in JavaScript which can be used to make
    the complex operation easy and manageable with making the overall
    application secure and easy to work.
*/
// class TheEmp {
//   // Privte Property
//   #e;
//   constructor(id, userName, eSalary) {
//     this.i = id;
//     this.u = userName;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }
// let employerOne = new TheEmp(100, "Mos3aB", "5000 Genh");
// console.log(employerOne.i);
// console.log(employerOne.u);
// console.log(employerOne.getSalary());
// console.log(employerOne.e) // undefined [You can't access to privte property direct]
//----------------------------------------------------------------
/*
  Getters and Setters
    Classes also allows you to use getters and setters.

    It can be smart to use getters and setters for your properties,
    especially if you want to do something special with the value before
    returning them, or before you set them.

  To add getters and setters in the class, use the get and set keywords.
*/
// class theInfo {
//   #user;
//   #card;
//   constructor(userName, card) {
//     this.#user = userName;
//     this.#card = card;
//   }

//   get craditcard() {
//     return this.#card.toString().match(/\d{4}/g).join("-");
//   }
//   set craditcard(x) {
//     this.#card = x;
//   }

//   showData() {
//     return `Hello ${this.#user} Your Credit Card Number Is ${this.craditcard}`;
//   }
// }

// let One = new theInfo("Osama", "1234-5678-1234-5678");
// let Two = new theInfo("Ahmed", "1234567812345678");
// let Three = new theInfo("Ghareeb", 1234567812345678);

// console.log(One.showData());
// console.log(Two.showData());
// console.log(Three.showData());
//----------------------------------------------------------------

// class Parent {
//   #re;
//   constructor(user, age, remaining) {
//     this.u = user;
//     this.i = age;
//     this.#re = remaining;
//   }
//   reInfo() {
//     return Math.ceil(this.#re);
//   }
//   ageInfo() {
//     return parseInt(this.i);
//   }
// }
// class Child extends Parent {
//   constructor(user, age, remaining, used) {
//     super(user, age, remaining);
//     this.used = used;
//   }
// }

// let vipUser1 = new Parent("Mos3aB", 21, 99.6);
// console.log(vipUser1.reInfo());
// console.log(vipUser1.ageInfo());
// console.log(vipUser1.u);
// console.log(vipUser1.re); // Undefined [You can't access to privte property direct]

// let vipUser2 = new Child("Elzero", 40, 194.3, 300);
// console.log(vipUser2.u);
// console.log(vipUser2.i);
// console.log(vipUser2.used);
// console.log(vipUser2.reInfo());
//----------------------------------------------------------------
/*
  Prototype
  - Introduction
  - Prototypes are the machanism by which JavaScript objects
    inherit features from one another
*/
// console.log(Parent.prototype);
// let testStr = "Elzero";
// console.log(String.prototype);
//----------------------------------------------------------------
/*
  Prototype
  - Add to prototype chain
  - Extend built in constructor features
*/

// class Prototype {
//   constructor(id, userName) {
//     this.i = id;
//     this.u = userName;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let admin = new Prototype(23, "Mos3aB");
// console.log(admin.u);
// console.log(Prototype.prototype);
// console.log(admin);

// Prototype.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}, Your Age Is ${this.i}`;
// };

// console.log(admin.sayHello());
// console.log(admin.sayWelcome());

// Object.prototype.love = "Elzero Web School";
// String.prototype.addDotBeforeAndAfter = function () {
//   return `. ${this} .`;
// };

// let myString = "Mos3aB";
// console.log(myString.addDotBeforeAndAfter());
//----------------------------------------------------------------
/*
  Object meta data and descriptor
  - writable
  - enumerable
  - configurable [Cannot delete or reconfigure]
*/
// let myObject = {
//   a: 1,
//   b: 2,
// };
// console.log(myObject);

// Object.defineProperty(myObject, "c", {
//   // true if the value associated with the property may be changed with an
//   // assignment operator. Defaults to false.
//   writable: true,
//   // true if and only if this property shows up during enumeration of the
//   // properties on the corresponding object. Defaults to false.
//   enumerable: true,
//   /*
//     when this is set to false,
//     the type of this property cannot be changed between data property and
//       accessor property, and
//     the property may not be deleted, and
//     other attributes of its descriptor cannot be changed
//       (however, if it's a data descriptor with writable: true,
//       the value can be changed, and writable can be changed to false).
//     Defaults to false.
//   */

//   configurable: false,
//   value: 3,
// });
// Object.defineProperty(myObject, "d", {
//   writable: false,
//   enumerable: false,
//   configurable: true,
//   value: 300,
// });

// myObject.c = 100;

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// // console.log(delete myObject.c);
// console.log(myObject);
// //----------------------------------------------------------------
// /*
//   Object meta data and descriptor
//   - Define multiple properties => defineProperties()
//   - check descriptors => getOwnPropertyDescriptor(), getOwnPropertyDescriptors()
// */

// let theObject = {
//   a: 1,
//   b: 2,
// };
// Object.defineProperties(theObject, {
//   c: {
//     writable: true,
//     value: 3,
//   },
//   d: {
//     writable: true,
//     value: 4,
//   },
//   e: {
//     writable: true,
//     value: 5,
//   },
// });
// theObject.e = 100;
// console.log(theObject);
// console.log(Object.getOwnPropertyDescriptor(theObject, "e"));
// console.log(Object.getOwnPropertyDescriptors(theObject));
// //----------------------------------------------------------------
