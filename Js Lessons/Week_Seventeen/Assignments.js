//-------------------[Assign One]
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][2]);
//-------------------[Assign Two]
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()));
//-------------------[Assign Three]
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
// Returns an array of key/values of the enumerable properties of an object
let myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

//-------------------[Assign Four]
let theNumber = 100020003000;
// console.log(new Set(theNumber.toString().map((n) => n > 0)));
//-------------------[Assign Five]
let theName = "Elzero";

// One
console.log([...theName]);
// Two
console.log(theName.split(""));
// Three
console.log(Array.from(theName));
// Four
finalArr = [];
for (let i = 0; i < theName.length; i++) {
  finalArr.push(theName[i]);
}
console.log(finalArr);
// Five
console.log(theName.match(/./g));
//-------------------[Assign Six]
//-------------------[Assign Seven]

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
// One
console.log([...numsOne, ...numsTwo]);
// Two
console.log(numsOne.concat(numsTwo));
// Three
let allNums = [];
allNums.push(...numsOne, ...numsTwo);
console.log(allNums);
//-------------------[Assign Eight]
