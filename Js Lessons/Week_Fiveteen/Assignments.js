let fonts = document.getElementById("fonts");
let colors = document.getElementById("colors");
let size = document.getElementById("size");
let dataToLocalStorage = {
  font: "roboto",
  color: "red",
  size: "16px",
};

// Check If There Are A Data In LocalStorage
if (localStorage.getItem("data")) {
  dataFromLS = localStorage.getItem("data");
  dataToLocalStorage = JSON.parse(dataFromLS);
  // Take Old Informations From LocalStorage To The Document
  document.body.style.fontFamily = dataToLocalStorage.font;
  document.body.style.color = dataToLocalStorage.color;
  document.body.style.fontSize = dataToLocalStorage.size;
  // Change Value In The Fonts Select Box
  let fontArray = Array.from(fonts.children);
  fontArray.forEach((e) => {
    if (e.hasAttribute("selected")) {
      e.textContent = dataToLocalStorage.font;
    }
  });
  // Change Value In The colors Select Box
  let colorArray = Array.from(colors.children);
  colorArray.forEach((e) => {
    if (e.hasAttribute("selected")) {
      e.textContent = dataToLocalStorage.color;
    }
  });
  // Change Value In The Size Select Box
  let sizeArray = Array.from(size.children);
  sizeArray.forEach((e) => {
    if (e.hasAttribute("selected")) {
      e.textContent = dataToLocalStorage.size;
    }
  });
}
// Choose And Change Document Font
fonts.onchange = (e) => {
  let myFont = e.target.value;
  dataToLocalStorage.font = myFont;
  changeDocumentFont(myFont);
  addDataToLocalStorage();
};
function changeDocumentFont(font) {
  document.body.style.fontFamily = font;
}
// Choose And Change Document color
colors.onchange = (e) => {
  let myColor = e.target.value;
  dataToLocalStorage.color = myColor;
  changeDocumentColor(myColor);
  addDataToLocalStorage();
};
function changeDocumentColor(color) {
  document.body.style.color = color;
}
// Choose And Change Document Size
size.onchange = (e) => {
  let mySize = e.target.value;
  dataToLocalStorage.size = `${mySize}px`;
  changeDocumentSize(mySize);
  addDataToLocalStorage();
};
function changeDocumentSize(size) {
  document.body.style.fontSize = `${size}px`;
}
// Add Data To LocalStorage
function addDataToLocalStorage() {
  let jsonData = JSON.stringify(dataToLocalStorage);
  localStorage.setItem("data", jsonData);
}
