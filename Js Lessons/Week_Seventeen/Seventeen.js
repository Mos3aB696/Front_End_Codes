/*
  - Set data type => is a special type collection – “set of values” (without keys),
                          where each value may occur only once.
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Acces Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/
console.log(typeof new Set()); // Object

let myData = [1, 1, 1, 2, 3, "A"];
let myUniqueData = new Set(myData);

console.log(myData);
console.log(myUniqueData);

//  Cannot Acces Elements By Index
console.log(myUniqueData[0]);
// Return the number of (unique) elements in Set.
// size like length in Array
console.log(myUniqueData.size);
// Appends a new element with a specified value to the end of the Set.
myUniqueData.add("B").add("C");
//  removes the value, returns true if value existed at the moment of the call,
//  otherwise false.
myUniqueData.delete("B");
//  removes everything from the set.
// myUniqueData.clear();
//  returns true if the value exists in the set, otherwise false.
console.log(myUniqueData.has("C"));
// has like includes in array methods
console.log(myData.includes("A"));
console.log(myUniqueData);
console.log(myUniqueData.size);
// ---------------------------------------------------------------
/*
  - Set vs WeakSet
  The main differences are:
    # WeakSets are collections of objects only. They cannot contain arbitrary
    values of any type, as Sets can.
    # The WeakSet is weak, meaning references to objects in a WeakSet
    are held weakly. If no other references to an object stored in
    the WeakSet exist, those objects can be garbage collected.

  --
  Set     => can store any data values
  WeakSet => collection of objects only
  --
  Set     => have size property
  WeakSet => dose not have size property
  --
  Set     => have keys, values, entries
  WeakSet => does not have clear, keys, values and entries
  --
  Set     => can use forEach or for..of 
  WeakSet => cannot use forEach or for..of 
  --

  Search
  - weakset use cases
*/

// Type of data [1]
console.log("-".repeat(40));
// Any Type
let mySet = new Set([1, 1, 1, 2, 3, "Mos3aB"]);

console.log(mySet);
// Only Objects
let weakSet = { name: "Mos3aB", age: 21 };
let weakSetTwo = { name: "Osama", age: 39 };
let myWeakSet = new WeakSet([weakSet, weakSetTwo, { name: "Ibrahim" }]);
myWeakSet.add({ name: "Ahmed" });
console.log(myWeakSet);
console.log(myWeakSet);
console.log("-".repeat(40));

// Size [2]
// have size property
console.log(mySet.size);
// dose not have size property => Undefined
console.log(myWeakSet.size);
console.log("-".repeat(40));

// Keys [3]
// have keys, values, entries
let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//does not have clear, keys, values and entries => Error
// let iteratorWeak = myWeakSet.keys();
console.log("-".repeat(40));

// forEach and for..of [4]
// for..of
for (let value of mySet) {
  console.log(value);
}
// can use forEach
mySet.forEach((el) => console.log(el));
// cannot use forEach => Error
// myWeakSet.forEach((el) => console.log(el));
console.log("-".repeat(40));

// ---------------------------------------------------------------

/*
  - Map Data Type
  Syntax: new Map(Iterable with Key/Value)
  -- Map vs Object
  --
  ------- Map => Does not contain key by default
  ------- Object => Has default keys
  --
  --
  ------- Map => Key can be anything [Function, Object, Any Primitive data types]
  ------- Object => String or symbol
  --
  --
  ------- Map => Ordered by insertion
  ------- Object => Not 100% till now
  --
  --
  ------- Map => Get items by size
  ------- Object => Need to do manually
  --
  --
  ------- Map => Can be directly iterated
  ------- Object => Not directly and need to use Object.keys() and so on
  --
  --
  ------- Map => Better performance when add or remove data
  ------- Object => Low performance when comparing to map
  --
*/

// [1]
let myMap = new Map();
let myObject = {};
let myEmptyObject = Object.create(null);
// Object.create(null) = new Map()
console.log(myMap);
console.log(myObject);
console.log(myEmptyObject);

// [2]
let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function user() {}, "Function");
console.log(myNewMap.size);

let myNewObject = {
  // Here make override and make two keys one key
  10: "Number",
  10: "String",
};
console.log(Object.keys(myNewObject).length);

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));
console.log(myNewObject[10]);

console.log("=".repeat(10));
console.log(myNewMap);
console.log(myNewObject);
// ---------------------------------------------------------------
/*
  - Map Data Type
  Methods
  -- set
  -- get
  -- delete
  -- clear
  -- has

  Proeperties
  -- size
*/
console.log("-".repeat(50));
let theMap = new Map([
  ["Job", "Front End Developer"],
  ["Address", "Cairo"],
]);
// Adds a new element with a specified key and value to the Map.
// If an element with the same key already exists, the element will be updated.
theMap.set("Name", "Mos3aB");
theMap.set("Age", 21);
theMap.set("Country", "Egypt");

//returns the value by the key, undefined if key doesn’t exist in map
console.log(theMap.get("Country"));
// true if an element in the Map existed and has been removed,
// or false if the element does not exist.
console.log(theMap.delete("Age"));
theMap.delete("Age");
// Clear all map elements
// theMap.clear();
// Returns boolean indicating whether an element with the specified key exists or not.
console.log(theMap.has("Name"));
// Returns the number of elements in the Map.
console.log(theMap.size);
console.log(theMap);
console.log("-".repeat(50));

// ---------------------------------------------------------------

/*
  - Map vs WeakMap
  "
    ًWeakMap allows garbage collector to do its task but not map
  "
  --
  Map => Key can be anything
  ًWeakMap => Key can be object only
  --
*/

let mapUser = { theName: "Mos3aB" };
let map = new Map();
map.set(mapUser, "Object Value");
mapUser = null; // Override the Reference

console.log(map);

console.log("#".repeat(30));

let weakMapUser = { theName: "Mos3aB" };
let weakMap = new WeakMap();
weakMap.set(weakMapUser, "Object Value");

weakMap = null; // Override the Reference
console.log(weakMap);
// ---------------------------------------------------------------
/*
  Iteration over Map
  * For looping over a map, there are 3 methods:

  -- map.keys() – returns an iterable for keys,
  -- map.values() – returns an iterable for values,
  -- map.entries() – returns an iterable for entries [key, value],
      it’s used by default in for..of.
*/
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}
// ---------------------------------------------------------------
/*
  We can create a Map from an Object 
  - Object.entries(obj)
  We can also create an Object from a Map
  - Object.fromEntries(obj)
*/
let obj = { name: "Mos3aB" };
let newMap = new Map(Object.entries(obj));
console.log(newMap);
let convertToObject = Object.fromEntries(newMap);
console.log(convertToObject);

// ---------------------------------------------------------------
/*
  Array Methods
  The from() method creates a new array from any array-like or iterable object.
  - Array.form(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/
// Creates an array from an iterable object.
console.log(Array.from("Mos3aB"));
// Arrow Function
console.log(Array.from("12345", (n) => +n + +n));

//  Using The Map Function
console.log(
  Array.from("12345", function (n) {
    return n * n;
  })
);
let nums = [1, 1, 1, 1, 2, 3, 4];
let theSet = new Set(nums);
// Way One [Returned As Object]
console.log(theSet);
// Way Two [Returned As An Array]
console.log(Array.from(theSet));
// Way Three [Returned As An Array] [Future]
console.log([...new Set(nums)]);

function testArgs() {
  return arguments;
}
console.log(testArgs("Mos3aB", "Osama"));
// Returned An Array From Function
function arrayFrom() {
  return Array.from(arguments);
}
console.log(arrayFrom("Mos3aB", "Osama", 1, 2, 3));
// ---------------------------------------------------------------
/*
  Array Methods
  - Array.copyWithin(Target, Start[Opt], End[Opt])
  "copies part of an array to another location in the same array and 
    returns it without modifying its length."

  -- An Negative Value Will Count From The End

  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied

  -- Start
  ---- Index to start copying from
  ---- If omited = Start from index 0

  -- End
  ---- Index to end copying from
  ---- Not including end
  ---- If omited = Reach to end
*/
let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]
// myArray.copyWithin(4, 6); // [10, 20, 30, 40, 'B', 'A', 'B']
// myArray.copyWithin(4, -1); // [10, 20, 30, 40, 'B', 'A', 'B']
// myArray.copyWithin(-3, 6); // [10, 20, 30, 40, 'B', 'A', 'B']

// myArray.copyWithin(1, 5, 7); // [10, 'A', 'B', 40, 50, 'A', 'B']
// myArray.copyWithin(1, -2); // [10, 'A', 'B', 40, 50, 'A', 'B']

myArray.copyWithin(1, -2, -1); // [10, 'A', 30, 40, 50, 'A', 'B']

console.log(myArray);
// ---------------------------------------------------------------
/*
  Array Methods
  checks if any array elements pass a test (provided as a callback function).
  executes the callback function once for each array element.
  returns true (and stops) if the function returns true for one of the array elements.
  returns false if the function returns false for all of the array elements.
  does not execute the function for empty array elements.
  does not change the original array.

  - Array.some(Callbackfunc(ele, index, arr), this)
  --- CallbackFunc => Function to run on every element on the given array
  ------ Element => The current element to process
  ------ Index => Index of current element
  ------ Array => The current array working with
  --- This => Value to use as this when executing callbackfunc
  --
  Using
  - Check if element exists in array
  - Check if number in range
*/
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myNumber = 9;
// let check = myNums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

// Use this Argument
let check = myNums.some(function (e) {
  // console.log(this);
  return e > this;
}, myNumber);
console.log(check);

function checkValue(arr, val) {
  return arr.some((e) => e === val);
}

console.log(checkValue(myNums, 20));
console.log(checkValue(myNums, 5));

// Check Range

let range = {
  min: 10,
  max: 20,
};

let checkRange = myNums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(checkRange);
// ---------------------------------------------------------------
/*
  ِArray Methods
  executes a function for each array element.
  returns true if the function returns true for all elements.
  returns false if the function returns false for one element.
  does not execute the function for empty elements.
  does not change the original array

  - Array.every(CallBackFunc(ele, ind, arr), this)
  --- CallbackFunc => Function to run on every element on the given array
  ------ Element => The current element to process
  ------ Index => Index of current element
  ------ Array => The current array working with
  --- This => Value to use as this when executing callbackfunc
*/

let locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "Place 4",
};
let mainLocation = 10;

let locationArray = Object.keys(locations);
console.log(locationArray);
let locationArrayNumber = locationArray.map((n) => +n);
console.log(locationArrayNumber);

let locationCheck = locationArrayNumber.every(function (n) {
  return typeof n === "number";
}, mainLocation);
console.log(locationCheck);
// ---------------------------------------------------------------
/*
  Spreed Operator => ...Iterable
  "Allow Iterable to expaned in place"
*/

// Spread with string => Expand string

console.log("Mos3aB");
console.log(..."Mos3aB");
console.log([..."Mos3aB"]);

// Concatenate arrays

let arrOne = [1, 2, 3, 10, 20];
let arrTwo = [4, 5, 6];
// Way One
let allArr = arrOne.concat(arrTwo);
console.log(allArr);
// Way Two [Spreed Operator]
let allArrs = [...arrOne, ...arrTwo];
console.log(allArrs);
// Way Three
let finalArr = [];
finalArr.push(...arrOne, ...arrTwo);
console.log(finalArr);

// Copy array

let copiedArray = arrOne;

console.log(copiedArray);

// Push inside array

let allFriends = ["Osama", "Sayed", "Ahmed"];
let newFriends = ["Ali", "Yosef"];
// Normal Way
// allFriends.push("Ali", "Yosef");
// Spread Operator
allFriends.push(...newFriends);
console.log(allFriends);

// Use with math object

let myNumbers = [10, 20, 50, -100, 200];
console.log(Math.max(...myNumbers));

// Spread with objects => Merge objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  C: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });
