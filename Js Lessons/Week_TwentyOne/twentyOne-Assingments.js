let c = console.log.bind(console);

let allArticles = new XMLHttpRequest();
allArticles.open("GET", "articles.json", true);
allArticles.send();

c(allArticles);
allArticles.onreadystatechange = function () {
  // -------------------[Assign Two]
  c(allArticles.readyState);
  c(allArticles.status);

  // -------------------[Assign Three]
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].section = "All";
    }
    c(mainData);
    let updatedData = JSON.stringify(mainData);
    c(updatedData);

    // -------------------[Assign Four]
    let div = document.createElement("div");
    div.setAttribute("id", "data");
    for (let j = 0; j < mainData.length; j++) {
      let id = document.createElement("h2");
      let idValue = document.createTextNode(mainData[j].id);
      id.appendChild(idValue);

      let section = document.createElement("p");
      let sectionText = document.createTextNode(mainData[j].section);
      section.appendChild(sectionText);

      let authorName = document.createElement("p");
      let authorNameText = document.createTextNode(
        `Author: ${mainData[j].authorName}`
      );
      authorName.appendChild(authorNameText);

      let content = document.createElement("p");
      let contentText = document.createTextNode(
        `Content: ${mainData[j].content}`
      );
      content.appendChild(contentText);

      let theData = document.createElement("div");

      theData.appendChild(id);
      theData.appendChild(section);
      theData.appendChild(authorName);
      theData.appendChild(content);

      div.appendChild(theData);
      document.body.appendChild(div);
    }
  }
};
allArticles.onload = function () {
  c("Data Loaded");
};
