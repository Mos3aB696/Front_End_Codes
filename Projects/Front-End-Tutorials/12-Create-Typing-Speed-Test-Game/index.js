// Array Of Words
let words = [
  "Hello",
  "programming",
  "Code",
  "javaScript",
  "Town",
  "Country",
  "Focus",
  "Hard",
  "Nothing",
  "Good",
  "Github",
  "Letcode",
  "Destructuring",
  "Internet",
  "Python",
  "Frontend",
  "backend",
  "Fullstack",
  "Web Development",
  "Styling",
  "Working",
  "fun",
  "Runner",
  "rust",
  "Playing",
  "Task",
  "Challenge",
  "Normal",
  "issue",
  "Padding",
];
// Setting Levels
let lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};

// Catch Selectors
let lvlNameSpan = document.querySelector(".message .lvl");
let select = document.getElementById("choose");
let secondsSpan = document.querySelector(".message .seconds");
let startButton = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upComingWords = document.querySelector(".upcoming-words");
let timeLeftSpan = document.querySelector(".control .time span");
let scoreGot = document.querySelector(".control .score .got");
let scoreTotal = document.querySelector(".control .score .total");
let finishMsg = document.querySelector(".finish");

// Default Level
let defaultlevelName = "Hard";
let defaultLevelSeconds = lvls[defaultlevelName];

lvlNameSpan.innerHTML = defaultlevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// function levelChoose(time) {
//   let text = select.options[select.selectedIndex].text;
//   // Default Level
//   let defaultlevelName = text;
//   let defaultLevelSeconds = lvls[defaultlevelName];
//   time = defaultLevelSeconds;
//   // Setting Levels Name, Seconds and Score
//   lvlNameSpan.innerHTML = defaultlevelName;
//   secondsSpan.innerHTML = defaultLevelSeconds;
//   timeLeftSpan.innerHTML = defaultLevelSeconds;
// }

// select.onclick = levelChoose;

// Disable Paste Event
input.onpaste = function () {
  return false;
};
// Click On Start Button
startButton.onclick = function () {
  // Remove Start Button
  startButton.remove();
  // Focus On Input
  input.focus();
  // Genrate Word Function
  genrateWord();
};

function genrateWord() {
  // Get Random Word From Array
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // Get Word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove Choosen Word From Array
  words.splice(wordIndex, 1);
  // Show Choosen Word
  theWord.innerHTML = randomWord;
  // Empty Upcoming Words
  upComingWords.innerHTML = "";
  // Genrate Words
  for (let i = 0; i < words.length; i++) {
    // Create Div Element
    let div = document.createElement("div");
    let text = document.createTextNode(words[i]);
    // Appending
    div.appendChild(text);
    upComingWords.appendChild(div);
  }
  // Genrate Time
  startPlay();
}

function startPlay() {
  // Rest Timer
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML == 0) {
      // Stop Timer
      clearInterval(start);
      //Compare Word
      if (theWord.innerHTML == input.value) {
        // Empty Input Field
        input.value = "";
        // Increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          genrateWord();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let text = document.createTextNode("Congratulation");
          span.appendChild(text);
          finishMsg.appendChild(span);
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let text = document.createTextNode("Game Over");
        span.appendChild(text);
        finishMsg.appendChild(span);
      }
    }
  }, 1000);
}
