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
  e.target.style.background = "#FFF";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRead);

function iamAcallback() {
  c("Iam A Callback");
}
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
//   let connect = true;
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
//   loading ? photoLoaded("Photo Loaded") : photoUnloaded("Photo Not Loaded");
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
//   let employees = ["Moawaz", "Osama", "Mos3aB", "Elzero"];
//   if (employees.length === 4) {
//     resolveFunction(employees);
//   } else {
//     rejectFunction(Error("Number Of Employees Aren't 4"));
//   }
// });

// thePromise
//   .then((resolveValue) => {
//     const randomEmp = Math.floor(Math.random() * resolveValue.length);
//     const choosenEmp = resolveValue[randomEmp];
//     return choosenEmp;
//   })
//   .then((choosenEmp) => {
//     c(`The Choosen Employee Is ${choosenEmp}`);
//   })
//   .catch((rejectedReason) => c(rejectedReason))
//   .finally((finially) => c("The Operation Is Done"));
// ---------------------------------------------------------
/*
  Promise And XHR
*/

// const data = function (apiLink) {
//   // Function That Return Promise
//   return new Promise((resolve, reject) => {
//     // XHR Request
//     let myRequest = new XMLHttpRequest();
//     // Onload Event
//     myRequest.onload = function () {
//       // Check If The Request Is Done And The Status Is 200
//       if (this.status === 200 && this.readyState === 4) {
//         // Resolve The Data
//         resolve(JSON.parse(this.responseText));
//       } else {
//         // Reject The Data
//         reject(Error("There Is No Data Found, Please Check Your URL"));
//       }
//     };
//     // Open The Request
//     myRequest.open("GET", apiLink);
//     // Send The Request
//     myRequest.send();
//   });
// };

// // Get The Data From The API
// data("https://api.github.com/users/Mos3aB696/repos").then((repos) => {
//   for (let repo of repos) {
//     c(
//       "Repo_name => " +
//         repo.name +
//         " | Repo_id => " +
//         repo.id +
//         " | URL => " +
//         repo.url +
//         " | Watcher => " +
//         repo.watchers
//     );
//   }
// });
//   .catch((rej) => c(rej))
//   .finally(() => c("Mission Done"));
// //
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
//   .then((myJson) => {
//     for (let repo of myJson) {
//       c(
//         "Repo_name => " +
//           repo.name +
//           " | Repo_id => " +
//           repo.id +
//           " | URL => " +
//           repo.url +
//           " | Watcher => " +
//           repo.watchers
//       );
//     }
//   })
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
    any of the provided Promises are resolved or rejected. [First One Wins]
*/

// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The First Promise");
//     // rej("Faild The First Promise");
//   }, 500);
// });
// const mySecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The Second Promise");
//   }, 1000);
// });
// const myThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Iam The Third Promise");
//   }, 200);
// });

// let promiseArray = [myFirstPromise, mySecondPromise, myThirdPromise];

// Creates a Promise that is resolved with an array of results when all of the provided Promises resolve,
// or rejected when any Promise is rejected.
// Promise.all(promiseArray)
//   .then((resolvedValues) => c(resolvedValues))
//   .catch((rej) => c("Error: ", rej))
//   .finally(() => c("All Promises Are Done"));

// Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.
// Promise.allSettled(promiseArray)
//   .then((resolvedValues) => c(resolvedValues))
//   .catch((rej) => c("Error: ", rej))
//   .finally(() => c("All Promises Are Done"));

// Promise.race(promiseArray)
//   .then((resolvedValues) => c(resolvedValues))
//   .catch((rej) => c("Error: ", rej))
//   .finally(() => c("All Promises Are Done"));
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
//   let users = ["Mos3aB", " Moawaz", " Elzero"];
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

// theData()
//   .then((resolved) => c(resolved))
//   .catch((rejected) => c(rejected));
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
//     resolve("Iam A Good Promise");
//     reject("Iam A Bad Promise");
//   }, 5000);
// });

// async function readData() {
//   c("Before Promise");
//   // You can use Await without then
//   await promise.then(
//     (res) => c(res),
//     (rej) => c(rej)
//   );

//   // Use catch to catch the error
//   // c(await promise.catch((rej) => rej));

//   c("After Promise");
// }
// readData();
// ---------------------------------------------------------
/*
  Async & Await With Try, Catch, Finally
*/
const finialPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Finially Resolved Promise"); // 5
    reject("Finially Rejected Promise");
  }, 1000);
});

async function finialData() {
  c("Before Finally"); // 1
  try {
    c(await finialPromise);
  } catch (rej) {
    c(`Rejected Reason: ${rej}`);
  } finally {
    c("After Finally"); // 6
  }
}
finialData();
// ("https://api.github.com/users/Mos3aB696/repos");

// Async functions can contain zero or more await expressions
async function finialFetch() {
  c("Before Fetch"); // 2
  try {
    let myData = await fetch("https://api.github.com/users/Mos3aB696/repos");
    let lastData = await myData.json();
    c(lastData[2].name); // 3
  } catch (reason) {
    c(reason);
  } finally {
    c("After Fetch"); // 4
  }
}
finialFetch();
