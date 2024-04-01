let c = console.log;

// Click On Start Button
document.querySelector(".control-button span").onclick = function () {
  let yourName = prompt("Enter Your Name");
  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "Unknown";
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }
  document.querySelector(".control-button").remove();
  // Trigger showAllBlocks Function
  showAllBlocks();
  // Trigger CountDown Function
  countDown();
};

// Establish Main Variables
let duration = 1000;
let blocksContainer = document.querySelector(".blocks-container");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];
// Trigger shuffle funtion
shuffle(orderRange);

// Function To Show All Blocks To User In First Second
function showAllBlocks() {
  blocks.forEach((block) => {
    block.classList.add("clicked");
    let showAll = setTimeout(() => {
      block.classList.remove("clicked");
    }, 3000);
  });
}

// Make Loop On Children To Add Order Property
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];

  block.addEventListener("click", function () {
    // Trigger flipBlock Fucntion
    flipBlock(block);
  });
});

function flipBlock(selectedBlock) {
  // Add Class clicked
  selectedBlock.classList.add("clicked");
  // Collect All Flipped Card
  let allFlippedCard = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("clicked")
  );

  if (allFlippedCard.length === 2) {
    // Trigger stopClicking Function
    stopClicking();
    // Trigger matchingClicked Function
    matchingClicked(allFlippedCard[0], allFlippedCard[1]);
  }
}

function shuffle(array) {
  // Setting Variables
  let current = array.length,
    stash,
    random;

  while (current > 0) {
    // Get Random Number
    random = Math.floor(Math.random() * current);
    //Decrease Length By One
    current--;

    // [1] Save Current Element To Stash
    stash = array[current];
    // [2] Current Element = Random Element
    array[current] = array[random];
    // [3] Random Element = Get Element From Stash
    array[random] = stash;
  }
  return array;
}
/*
[1] Save Current Element To Stash
[2] Current Element = Random Element
[3] Random Element = Get Element From Stash 
*/

function stopClicking() {
  // Add Class no-clicking
  blocksContainer.classList.add("no-clicking");
  setTimeout(() => {
    blocksContainer.classList.remove("no-clicking");
  }, duration);
}
function matchingClicked(fristChoosen, secondChoose) {
  let wrongTries = document.querySelector(".tries span");
  // Check If Both Same
  if (fristChoosen.dataset.tech === secondChoose.dataset.tech) {
    // Remove Clicked Class
    fristChoosen.classList.remove("clicked");
    secondChoose.classList.remove("clicked");
    // Add Class match
    fristChoosen.classList.add("match");
    secondChoose.classList.add("match");
    // Add Sound Effect
    document.getElementById("success").play();
  } else {
    // Add Sound Effect
    document.getElementById("wrong").play();
    wrongTries.innerHTML = Number.parseInt(wrongTries.innerHTML) + 1;
    setTimeout(() => {
      fristChoosen.classList.remove("clicked");
      secondChoose.classList.remove("clicked");
    }, duration);
  }
}

function countDown() {
  let start = setInterval(() => {
    // Decrease time
    let count = document.querySelector(".info-container .count-down span");
    count.innerHTML = Number.parseInt(count.innerHTML) - 1;

    if (count.innerHTML == 0) {
      // clear Interval
      clearInterval(start);
      // Check if All Blocks Have Class match Or Not
      blocks.forEach((block) => {
        if (block.classList.contains("match")) {
          let goodResult = document.querySelector(".result");
          goodResult.innerHTML = "Congratulation";
          goodResult.classList.add("good");
          document.getElementById("congrat").play();
        } else {
          let badResult = document.querySelector(".result");
          badResult.innerHTML = "Game Over";
          badResult.classList.add("bad");
          document.getElementById("again").play();
        }
      });
    }
  }, duration);
}
