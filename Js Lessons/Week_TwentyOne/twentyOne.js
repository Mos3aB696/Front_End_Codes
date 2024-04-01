document.body.style.backgroundColor = "#3b393d";
const c = console.log.bind(console);
// /////////////////////////////////////////////////////////

/*
  What is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Dervied From JavaScript 
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Framworks
  - You Can Convert JSON Object To JS Object And Vice Versa
*/
// -----------------------------------------------------------
/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes 
  - Data Seprated By Comma
  - Square Brackets [] For Arrays 
  - Curly Braces {} For Object
  - Comments are not permitted in JSON

  Available Date Types
  - String 
  - Number => must be an integer or a floating point.
  - Object => Objects as values in JSON must follow the JSON syntax.
  - Array 
  - Boolean Values
  - Null

  Unavailable Date Types
  - Function
  - Date
  - Undefined
*/
// -----------------------------------------------------------
/*
  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API
*/
// -----------------------------------------------------------
/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/
const myJsonObjectFromServer = `{"userName" : "Mos3aB", "age" : 21}`;

c(typeof myJsonObjectFromServer);
c(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);
c(typeof myJsObject);
c(myJsObject);

myJsObject["userName"] = "Elazazi";
myJsObject["age"] = 22;

c(typeof myJsObject);
c(myJsObject);

const myJsonObjectToServer = JSON.stringify(myJsObject);
c(typeof myJsonObjectToServer);
c(myJsonObjectToServer);
// -----------------------------------------------------------
/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming

  Synchronous
  - Operations Runs In Sequence 
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous 
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur While Another One Is Still Being Processed
  - Story From Real Life

  Search
  - JavaScript Is A Single Threaded
  - Multi Threaded Languages
*/
// Synchronous;
// c("1");
// c("2");
// window.alert("Operation");
// c("3");

// Asynchronous
// c("1");
// c("2");
// setTimeout(() => c("Operation"), 500);
// c("3");

// -----------------------------------------------------------
/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace 
  -- JavaScript Engine Uses A Call Stack To Mange Execution Contexts
  -- Machanism To Make The Interpreter Trach Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Excuted It Removed From The Stack
  -- After Function Is FInished Executing The Interpreter Continue From The Last Point
  -- Work Using Last In Frist Out Principle
  -- Code Execution Is Synchronous
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/
// setTimeout(() => c("Web API"), 0);
// function one() {
//   c("One");
// }
// function two() {
//   one();
//   c("Two");
// }
// function three() {
//   two();
//   c("Three");
// }
// three();
// c("##################");
// c("One");
// c("Two");
// c("Three");
// -----------------------------------------------------------
/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - Javascript is a single threaded language 
  - Call Stack track all calls
  - Every function is done its poped out
  - When you call asynchronous function it send to browser API
  - Asynchronous function like setTimeOut start its own thread
  - Brower API act as a second thread 
  - API finish waiting and send back the function for processing
  - Browser API add the callback to callback queue
  - Event loop wait for call stack to be empty
  - Event loop get callback from callback queue and add it to call stack
  - Callback queue follow [First In First Out] rule
*/

// c("one");
// setTimeout(() => c("Three"), 0);
// setTimeout(() => c("Four"), 0);
// c("Two");

// setTimeout(() => c(myNum), 0);
// let myNum = 100;
// myNum += 100;
// -----------------------------------------------------------
/*
  AJAX
  - Asynchronous Javacript And XML
  - AJAX is not a programming language.
  - Approach to use many technologies together [html - css - js - dom]
  - It use "XMLHttpRequest" object to interact with the server 
  - You can fetch data or send data without page refresh 

  AJAX is a developer's dream, because you can:
  - Update a web page without reloading the page
  - Request data from a server - after the page has loaded
  - Receive data from a server - after the page has loaded
  - Send data to a server - in the background

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

let request = new XMLHttpRequest();
c(request);
// -----------------------------------------------------------
/*
  AJAX
  - Ready State => Status of the request
  [0] Request Not Intialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request 
  [4] Request Is Finished And Response Is Ready 
  - Status
  [200] Response Is Successful 
  [404] Not Found 

  Note:
  AJAX allows web pages to be updated asynchronously by exchanging data
  with a web server behind the scenes. This means that it is possible to update
  parts of a web page, without reloading the whole page.

*/
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/Mos3aB696/repos", true);
myRequest.send();

c(myRequest);

myRequest.onreadystatechange = function () {
  c(myRequest.readyState);
  c(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    // Returns the response type.
    c(this.responseType);
    // Returns response as text.
    let myData = JSON.parse(this.responseText);
    c(myData);
    for (let i = 0; i < myData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(myData[i].name);
      div.appendChild(repoName);
      document.body.appendChild(div);
      div.style.color = "white";
      div.style.lineHeight = 3;
    }
  }
};
// -----------------------------------------------------------
/*
  AJAX
  Loop On Data

  Search
  - Cross Origin API 
  - API Authentication
*/
