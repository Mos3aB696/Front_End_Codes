// ----------------[Start Header]
let header = document.createElement("div");
header.setAttribute("class", "header");
// create container
let container = document.createElement("div");
container.setAttribute("class", "container");
// head [Elzero]
let pagetitle = document.createElement("div");
let titelText = document.createTextNode("Elzero");
pagetitle.appendChild(titelText);
pagetitle.setAttribute("class", "title");
// Create Menu
let menu = document.createElement("ul");
menu.setAttribute("class", "menu");
// Home
let menuHome = document.createElement("li");
let menuHomeText = document.createTextNode("Home");
menuHome.appendChild(menuHomeText);
// About
let menuAbout = document.createElement("li");
let menuAboutText = document.createTextNode("About");
menuAbout.appendChild(menuAboutText);
// Service
let menuService = document.createElement("li");
let menuServiceText = document.createTextNode("Service");
menuService.appendChild(menuServiceText);
// Content
let menuContent = document.createElement("li");
let menuContentText = document.createTextNode("Content");
menuContent.appendChild(menuContentText);
// Appending container to header
header.appendChild(container);
// Appending head [Elzero] to container
container.appendChild(pagetitle);
// Appending Menu to container
container.appendChild(menu);
// Appending lis to Menu
menu.appendChild(menuHome);
menu.appendChild(menuAbout);
menu.appendChild(menuService);
menu.appendChild(menuContent);
// Appending Header to body
document.body.appendChild(header);
// Reset Default Styling
document.body.style.cssText = "margin: 0; padding:0";
// Start Styling
container.style.cssText = `
    background-color: rgb(255 255 255);
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
// Styling head
pagetitle.style.cssText = `
    font-weight: bold;
    color: #22a86f;
    font-size: 25px
  `;
// Styling meue
menu.style.cssText = "list-style: none; display: flex; gap: 10px";
// ----------------[End Header]
// ----------------[Start Body]

let containerBody = document.createElement("div");
for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  // Appending product in containerBody
  containerBody.appendChild(product);
  let ProductNum = document.createElement("span");
  let productInsideNum = document.createTextNode(i);
  ProductNum.appendChild(productInsideNum);
  // Appending ProductNum in product
  product.appendChild(ProductNum);
  let productDiscription = document.createElement("span");
  let productInsideDiscription = document.createTextNode("Product");
  productDiscription.appendChild(productInsideDiscription);
  // Appending productDiscription in product
  product.appendChild(productDiscription);
  document.body.appendChild(containerBody);
  // Start Styling
  containerBody.style.cssText = `
    background: #ddd; 
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px , 1fr));
    gap: 15px;
    padding: 15px;
  `;
  // Product Styling
  product.style.cssText = `
    background-color: rgb(255 255 255);
    text-align: center;
    padding: 20px 0;
  `;
  ProductNum.style.cssText = `
    display:block;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bold;
  `;
  productDiscription.style.cssText = `
    color: rgb(70 91 102);
  `;
}
// ----------------[End Body]
// ----------------[Start Footer ]
let footer = document.createElement("div");
let span = document.createElement("span");
let text = document.createTextNode("Mos3aB  2022");
// Appending text in span
span.appendChild(text);
// Appending span in footer
footer.appendChild(span);
// Appending footer in body
document.body.appendChild(footer);
// Start Styling
footer.style.cssText = `
  background: #22a86f;
  color:rgb(255 255 255);
  padding: 15px
`;
span.style.cssText = `
  text-align: center;
  display: block;
  font-family: sans-serif;
  font-weight: bold;
`;
// ----------------[End Footer ]
