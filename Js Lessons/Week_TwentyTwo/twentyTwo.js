document.body.style.background = "rgb(49 45 45)";
document.body.style.color = "white";
let c = console.log;
// ---------------------------------------------------------
/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What is callback?
  - A Function that is passed into another one as an argument to be excuted later
  - Function to handle photos
  ---[1] Download photo from url
  ---[2] Resize photo
  ---[3] Add logo to the photo
  ---[4] Show the photo in website
*/
function makeItRead(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRead);

// function iamAcallback() {
//   c("Iam A Callback");
// }

// setTimeout(iamAcallback, 500);

// // Callback Hell
// setTimeout(() => {
//   c("Download photo from url");
//   setTimeout(() => {
//     c("Resize photo");
//     setTimeout(() => {
//       c("Add logo to the photo");
//       setTimeout(() => {
//         c("Show the photo in website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// ---------------------------------------------------------
/*
  Promise Intro And Syntax
  - Promise in js is like it in real life
  - Promise is something that will happen in the future
  - Promise avoid callback hell
  - Promise is the object that represent the status of an asynchronous operation
    and its resulting value

  - Promise Status
  --- Pending status 
  --- Fulfilled completed successfully
  --- Rejected failed

  Story
  - Once a promise has been called, It will start in a pending state
  - The created promise will eventually end in a resolved state or in a rejected state
  - Calling the callback functions (Passed to then and catch) upon finishing

  - Then 
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   connect
//     ? resolveFunction("Connection Established")
//     : rejectFunction("Connection Failed");
// });

// c(myPromise);
// c(typeof myPromise);

// myPromise.then(
//   (resolveValue) => c(`Good ${resolveValue}`),
//   (rejectValue) => c(`Bad Error ${rejectValue}`)
// );

// let photoOPromise = new Promise((photoLoaded, photoUnloaded) => {
//   let loading = false;
//   if (loading) {
//     photoLoaded("Loaded");
//   } else {
//     photoUnloaded("Loading");
//   }
// }).then(
//   (doneLoad) => c(`Successful ${doneLoad}`),
//   (faildLoad) => c(`Faild ${faildLoad}`)
// );
// // Avoid Callback Hell
// photoOPromise.then((_stepOne) => c("Download photo from url"));
// photoOPromise.then((_stepTwo) => c("Resize photo"));
// photoOPromise.then((_stepThree) => c("Add logo to the photo"));
// photoOPromise.then((_stepFour) => c("Show the photo in website"));
// ---------------------------------------------------------
/*
  Promise Training

  We will go to the meeting, Promise me that we will find the 4 employees
  -then(We will choose two people)
  -then(We will test them then get one of them)
  -catch(No One Came)

  Then    => Promise is Successful use the resolved data
  Catch   => Promise is Failed, Catch the error
  Finally => Promise Successful or Failed finally do something

  "Producing code" is code that can take some time
  "Consuming code" is code that must wait for the result
  A Promise is a JavaScript object that links producing code and consuming code

  Note =>
    You cannot access the Promise properties state and result.
    You must use a Promise method to handle promises.
*/

// const thePromise = new Promise((resolveFunction, rejectFunction) => {
//   let employees = ["Moawaz", "Osama", "Seif", "Mos3aB"];
//   if (employees.length === 4) {
//     resolveFunction(employees);
//   } else {
//     rejectFunction(Error("Number Of Employees Aren't 4"));
//   }
// });

// thePromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     c(`The Choosen Employee Is ${resolveValue}`);
//   })
//   .catch((rejectedReason) => c(rejectedReason))
//   .finally((finially) => c("The Operation Is Done"));
// ---------------------------------------------------------
/*
  Promise And XHR
*/

// const data = function (apiLink) {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.status === 200 && this.readyState === 4) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("There Is No Data Found, Please Check Your URL"));
//       }
//     };
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// data("https://api.github.com/users/Mos3aB696/repos")
//   .then((result) => c(result[2].name))
//   .catch((rej) => c(rej))
//   .finally(() => c("Mission Done"));

// ("https://api.github.com/users/Mos3aB696/repos");

// ---------------------------------------------------------
/*
  Fetch API
  - Return a representation of the entire HTTP resopnse
  -  method starts the process of fetching a resource from a server.
  -  method returns a Promise that resolves to a Response object.

  Note => 
  😀 No need for XMLHttpRequest anymore.
*/
// fetch("https://api.github.com/users/Mos3aB696/repos")
//   .then((fullData) => fullData.json())
//   .then((myJson) => c(myJson[1].name))
//   .catch((rej) => c(rej))
//   .finally(() => c("Mission Complete"));

// ---------------------------------------------------------
/*
  Promise 
  - All
    Creates a Promise that is resolved with an array of results when
    all of the provided Promises resolve, or rejected when any Promise is rejected.

  - All Settled
    Creates a Promise that is resolved with an array of results when 
    all of the provided Promises resolve or reject.

  - Race 
    Creates a Promise that is resolved or rejected when 
    any of the provided Promises are resolved or rejected.
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 500);
});
const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Second Promise");
  }, 1000);
});
const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// It returns the first rejected, If found it
// It returns the all resolved as an array, If there is no rejected
Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => c(resolvedValues),
  (rejectedValues) => c(`Rejected: ${rejectedValues}`)
);

Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => c(resolvedValues),
  (rejectedValues) => c(`Rejected: ${rejectedValues}`)
);

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => c(resolvedValues),
  (rejectedValues) => c(`Rejected: ${rejectedValues}`)
);
// ---------------------------------------------------------
/*
  Async
  - Async before function mean this function return a promise
  - Async and Await help in creating asyncronous promise behavior with cleaner style

"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise
*/

// function getData() {
//   return new Promise((resolve, reject) => {
//     let users = ["Mos3aB"];
//     if (users.length > 0) {
//       resolve("Users Found");
//     } else {
//       reject("There Is No Users");
//     }
//   });
// }
// getData().then(
//   (resolvedValue) => c(resolvedValue),
//   (rejectedValue) => c(rejectedValue)
// );

// function myData() {
//   let users = ["Mos3aB", " Moawaz"];
//   if (users.length > 0) {
//     return Promise.resolve(
//       users.length === 1 ? `The User Is ${users}` : `The Users Are ${users}`
//     );
//   } else {
//     return Promise.reject("Rejected: " + "There Is No Users");
//   }
// }

// myData().then(
//   (resolved) => c(resolved),
//   (rejected) => c(rejected)
// );

// async function theData() {
//   let users = ["Mos3aB", " Moawaz", " Elzero"];
//   if (users.length > 0) {
//     return users.length === 1
//       ? `The User Is ${users}`
//       : `The Users Are ${users}`;
//   } else {
//     throw new Error("No Users Found");
//   }
// }

// c(theData());

// theData().then(
//   (resolved) => c(resolved),
//   (rejected) => c(rejected)
// );
// ---------------------------------------------------------
/*
  Await
  - Await works only inside Async function
  - Await makes the function pause the execution and wait for
    a resolved promise before it continues
  - Await is more elegant syntax of getting promise result 
*/

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Iam A Good Promise");
//     reject("Iam A Bad Promise");
//   }, 500);
// });

// async function readData() {
//   c("Before Promise");
//   // You can use Await without then
//   // await promise.then(
//   //   (res) => c(res),
//   //   (rej) => c(rej)
//   // );

//   // Use catch to catch the error
//   c(await promise.catch((rej) => rej));

//   c("After Promise");
// }
// readData();
// ---------------------------------------------------------
/*
  Async & Await With Try, Catch, Finally
*/
const finialPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Finially Resolved Promise");
    reject("Finially Rejected Promise");
  }, 2000);
});

// async function finialData() {
//   c("Before Finally");

//   try {
//     c(await finialPromise);
//   } catch (rej) {
//     c(`Rejected Reason: ${rej}`);
//   } finally {
//     c("After Finally");
//   }
// }
// finialData();
//("https://api.github.com/users/Mos3aB696/repos");

// Async functions can contain zero or more await expressions
// async function finialFetch() {
//   c("Before Fetch");
//   try {
//     let myData = await fetch("https://api.github.com/users/Mos3aB696/repos");
//     let lastData = await myData.json();
//     c(lastData[2].name);
//   } catch (reason) {
//     c(reason);
//   } finally {
//     c("After Fetch");
//   }
// }
// finialFetch();
