// -----------------------[Assign Two]
let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let currentElem = document.getElementsByClassName("element current")[0];
let myDiv = document.querySelector(".classes-list div");

function showClasslist() {
  if (currentElem.classList.value === "") {
    myDiv.innerHTML = "No Classes To Show";
  } else {
    currentElem.classList.value
      .split(" ")
      .sort()
      .map((c) => {
        let mySpan = document.createElement("span");
        mySpan.innerHTML = c;
        myDiv.appendChild(mySpan);
      });
  }
}

addClass.onblur = () => {
  const wordsToAdd = addClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsToAdd.length; i++) {
    currentElem.classList.add(wordsToAdd[i]);
    let span = document.createElement("span");
    span.textContent = wordsToAdd[i];
    myDiv.appendChild(span);
  }
  addClass.value = "";
};

removeClass.onblur = () => {
  const wordsToRemove = removeClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsToRemove.length; i++) {
    currentElem.classList.remove(wordsToRemove[i]);
    for (let j = 0; j < myDiv.children.length; j++) {
      if (myDiv.children[j].textContent === wordsToRemove[i]) {
        myDiv.removeChild(myDiv.children[j]);
      }
    }
  }
  removeClass.value = "";
  showClasslist();
};

// -----------------------[Assign Three]
let mainElement = document.querySelector(".our-element");
// create start element
let start = document.createElement("div");
let startText = document.createTextNode("Start");
start.appendChild(startText);
start.setAttribute("class", "start");
start.setAttribute("title", "Start Element");
start.setAttribute("data-value", "Start ");
let startEle = mainElement.before(start);
// create end element
let end = document.createElement("div");
let endText = document.createTextNode("End");
end.appendChild(endText);
end.setAttribute("class", "end");
end.setAttribute("title", "End Element");
end.setAttribute("data-value", "End ");
let endEle = mainElement.after(end);
// remove pragraph
end.nextElementSibling.remove();
// -----------------------[Assign Four]
let mainEle = document.querySelector("div span").remove();
// -----------------------[Assign Five]
let allPage = document.body;

allPage.addEventListener("click", (event) => {
  console.log(`This Is ${event.target.nodeName}`);
});
