let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let tasksArr = [];

submit.addEventListener("click", (e) => {
  if (input.value == "") {
    e.preventDefault();
  } else {
    // Create Elements
    let parentDiv = document.createElement("div");
    let childDiv = document.createElement("div");
    let deleteBtn = document.createElement("button");
    let childText = document.createTextNode(input.value);
    let deleteText = document.createTextNode("Delete");

    // Appending Elements
    tasks.appendChild(parentDiv);
    parentDiv.appendChild(childDiv);
    parentDiv.appendChild(deleteBtn);
    childDiv.appendChild(childText);
    deleteBtn.appendChild(deleteText);

    // styling result
    parentDiv.style.cssText = `
  display: flex;
  padding: 5px 20px;
  justify-content: space-between;
  `;
    childDiv.style.cssText = `
  background: white;
  width: calc(100% - 30%);
  align-items: flex-start;
  display: flex;
  border-radius: 5px;
  padding: 3px 10px;
  `;
    deleteBtn.style.cssText = `
  background: red;
  border: none;
  color: white;
  border-radius: 5px;
  opacity: 0.8;
  cursor: pointer;
  `;

    let newTask = {
      title: childDiv.innerHTML,
    };

    // Push newTask to taskArr
    tasksArr.push(newTask);
    // localStoratge
    window.localStorage.task = JSON.stringify(tasksArr);

    // Delete Content
    deleteBtn.onclick = (e) => {
      parentDiv.remove();
      window.localStorage.removeItem("task");
    };
    input.value = "";
  }
});
