// Select Element
let spanCount = document.querySelector(".quiz-info .count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector("button");
let results = document.querySelector(".results");
let countDownElement = document.querySelector(".count-down");

// Set Options
let currentIndex = 0;
let rightAnswers = 0;
let countDownInterval;

function getQuestions() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionsObj = JSON.parse(this.responseText);
      let questionsCount = questionsObj.length;

      // Create Bullets + Set Questions Count
      createBullets(questionsCount);

      // Add Questions Data
      addQuestionData(questionsObj[currentIndex], questionsCount);

      // Starts Count Down
      countDown(5, questionsCount);
      // Click On Submit
      submitButton.onclick = function () {
        // Get Right Answers
        let rightAnswer = questionsObj[currentIndex].right_answer;

        // Increase Index
        currentIndex++;

        // Check The Answers
        checkAnswers(rightAnswer, questionsCount);

        // Remove Previous Question
        quizArea.innerHTML = "";
        answersArea.innerHTML = "";
        // Add Questions Data
        addQuestionData(questionsObj[currentIndex], questionsCount);

        // Handle Bullets Class
        handleBullets();

        // Count Down
        clearInterval(countDownInterval);
        countDown(5, questionsCount);

        // Show Results
        showResults(questionsCount);
      };
    }
  };

  myRequest.open("GET", "html_questions.json", true);
  myRequest.send();
}
getQuestions();

// Create Bullets + Set Questions Count
function createBullets(num) {
  spanCount.innerHTML = num;
  // Create Bullets
  for (let i = 0; i < num; i++) {
    // create Bullet
    let bullet = document.createElement("span");
    // Check If It First Span
    if (i === 0) {
      bullet.className = "on";
    }
    // Appending Created Bullet In Bullet Container
    bulletsSpanContainer.appendChild(bullet);
  }
}
// Create The Question Data
function addQuestionData(obj, count) {
  if (currentIndex < count) {
    // Create Question
    let theQuestion = document.createElement("h2");
    let theQuestionText = document.createTextNode(obj["title"]);
    theQuestion.appendChild(theQuestionText);
    // Appending The Question In quizArea
    quizArea.appendChild(theQuestion);

    // Create Answers
    for (let i = 1; i <= 4; i++) {
      // Create Main Div
      let mainDiv = document.createElement("div");
      mainDiv.className = "answer";
      // Create Input
      let inputRadio = document.createElement("input");
      // Set input Attributes [type | name | id | data-answer]
      inputRadio.type = "radio";
      inputRadio.name = "answer";
      inputRadio.id = `answer_${i}`;
      inputRadio.dataset.answer = obj[`answer_${i}`];
      // Check If It First Answer Or Not
      if (i === 1) {
        inputRadio.checked = true;
      }
      // Create Lable
      let theLabel = document.createElement("label");
      // Create For Attr To Link Radio + Label
      theLabel.htmlFor = `answer_${i}`;
      // Create Label Text
      let labelText = document.createTextNode(obj[`answer_${i}`]);
      theLabel.appendChild(labelText);

      // Appending Radio + Label in mainDiv
      mainDiv.appendChild(inputRadio);
      mainDiv.appendChild(theLabel);
      // Appending mainDiv in answersArea
      answersArea.appendChild(mainDiv);
    }
  }
}
function checkAnswers(rightAnswer, questionsCount) {
  let answers = document.getElementsByName("answer");
  let choosenAnswer;

  // Check The Answer
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      choosenAnswer = answers[i].dataset.answer;
    }
  }

  if (choosenAnswer === rightAnswer) {
    rightAnswers++;
  }
}
// checkeAnswers();
function handleBullets() {
  let bulletSpan = document.querySelectorAll(".bullets .spans span");
  let bulletSpanArr = Array.from(bulletSpan);
  bulletSpanArr.forEach((bullet, index) => {
    if (currentIndex === index) {
      bullet.className = "on";
    }
  });
}

function showResults(count) {
  let theResults;
  if (currentIndex === count) {
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();
    bullets.remove();

    if (rightAnswers > count / 2 && rightAnswers < count) {
      theResults = `<span class='good'>Good</span> You Answered ${rightAnswers} From ${count}`;
    } else if (rightAnswers === count) {
      theResults = `<span class='prefect'>Prefect</span> You Answered ${rightAnswers} From ${count}`;
    } else {
      theResults = `<span class='bad'>Bad</span> You Answered ${rightAnswers} From ${count}`;
    }
    results.innerHTML = theResults;
  }
}

function countDown(duration, count) {
  if (currentIndex < count) {
    let minutes, seconds;
    countDownInterval = setInterval(function () {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      countDownElement.innerHTML = `${minutes}:${seconds}`;
      if (--duration < 0) {
        clearInterval(countDownInterval);
        submitButton.click();
      }
    }, 1000);
  }
}
