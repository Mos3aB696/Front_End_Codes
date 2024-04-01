// Get Main Variable
let input = document.querySelector("input"),
  button = document.querySelector(".button"),
  finalResult = document.querySelector(".data");

button.onclick = function () {
  // Trigger showData Function
  showData();
};

function showData() {
  if (input.value == "") {
    finalResult.innerHTML = "<span>Pleas Enter Github Username</span>";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())
      .then((repositrys) => {
        // Clear The Result Area
        finalResult.innerHTML = "";
        // Clear The Input Field
        // input.value = "";
        // Make Loop One repositrys
        repositrys.forEach((repo) => {
          // Create The MainDiv
          let mainDiv = document.createElement("div"),
            divText = document.createTextNode(repo.name);
          // Appeding the Text Into MainDiv
          mainDiv.appendChild(divText);
          // Create The URL To Visit The WebSite
          let theUrl = document.createElement("a"),
            theUrlText = document.createTextNode("Visit");
          // Set href Attribute
          theUrl.setAttribute(
            "href",
            `https://github.com/${input.value}/${repo.name}`
          );
          theUrl.setAttribute("target", "_blank");
          // Appending theUrlText In theUrl
          theUrl.appendChild(theUrlText);

          // Appending theUrl In MainDiv
          mainDiv.appendChild(theUrl);
          // Appending the Main Div In FinalResult
          finalResult.appendChild(mainDiv);
        });
      });
  }
}
