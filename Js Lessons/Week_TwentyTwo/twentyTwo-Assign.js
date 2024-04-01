document.body.style.background = "#333333";
let c = console.log;
// --------------------------[Assign One]-------------------------------
let theData = function (theLink) {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("Please Check Your URL"));
      }
    };
    myRequest.open("GET", theLink);
    myRequest.send();
  });
};
theData("twentyTwo-Assign.json")
  .then((resolve) => {
    resolve.length = 5;
    return resolve;
  })
  .then((resolve) => {
    for (let i = 0; i <= resolve.length; i++) {
      // Create main Elements
      let div = document.createElement("div");
      let heading = document.createElement("h3");
      let p = document.createElement("p");
      // Create Text Node
      let headingText = document.createTextNode(resolve[i].title);
      let pText = document.createTextNode(resolve[i].description);

      // Appending
      // [Element]
      div.appendChild(heading);
      div.appendChild(p);
      // [Element Content]
      heading.appendChild(headingText);
      p.appendChild(pText);
      // [In Browser]
      document.body.appendChild(div);
      document.body.style.color = "white";
    }
  })
  .catch((reject) => c(reject))
  .finally(c("Mission Done"));
// --------------------------[Assign Two]-------------------------------
let byFetch = fetch("twentyTwo-Assign.json")
  .then((resolve) => {
    return resolve.json();
  })
  .then((resolve) => {
    resolve.length = 5;
    return resolve;
  })
  .then((resolve) => {
    for (let i = 0; i <= resolve.length; i++) {
      // Create main Elements
      let div = document.createElement("div");
      let heading = document.createElement("h3");
      let p = document.createElement("p");
      // Create Text Node
      let headingText = document.createTextNode(resolve[i].title);
      let pText = document.createTextNode(resolve[i].description);

      // Appending
      // [Element]
      div.appendChild(heading);
      div.appendChild(p);
      // [Element Content]
      heading.appendChild(headingText);
      p.appendChild(pText);
      // [In Browser]
      document.body.appendChild(div);
      document.body.style.color = "white";
    }
  })
  .catch((reject) => c(reject))
  .finally(c("Finally"));
