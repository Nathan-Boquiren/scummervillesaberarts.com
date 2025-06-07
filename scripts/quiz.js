//   DOM Elements
const quizForm = document.getElementById("quiz-form");
const scoreWrapper = document.getElementById("score-wrapper");

let answers = [];
let score = 0;
let currentQuestion = 0;

// fetch quiz data

fetch("../assets/quiz-data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((question) => {
      answers.push(question.answer);
    });
    createQuiz(data);
    addFunctionality();

    // show first question
    showQuestion(currentQuestion);
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

//   create quiz

function createQuiz(data) {
  data.forEach((question, idx) => {
    const questionWrapper = createElement("div", "question-wrapper");
    questionWrapper.id = `question${idx + 1}`;
    const questionTxt = createElement("h3", "question");
    questionTxt.innerText = question.questionTxt;
    questionWrapper.append(questionTxt);
    const choicesContainer = createChoicesContainer(question.choices, idx);
    questionWrapper.append(choicesContainer);
    const btn = createBtn(idx === data.length - 1);

    questionWrapper.append(btn);
    quizForm.append(questionWrapper);
  });
}

function createBtn(isLastQuestion) {
  const button = createElement("button", "next");
  button.type = isLastQuestion ? "submit" : "button";
  button.innerHTML = isLastQuestion ? "submit" : "next";
  return button;
}

function createChoicesContainer(choices, questionNum) {
  const choicesContainer = createElement("div", "choices-container");
  choices.forEach((choice) => {
    const choiceWrapper = createChoice(choice, questionNum);
    choicesContainer.append(choiceWrapper);
  });
  return choicesContainer;
}

function createChoice(choice, questionNum) {
  const choiceWrapper = document.createElement("label");
  //   prettier-ignore
  choiceWrapper.innerHTML += `<input type="radio" name="question${questionNum + 1}" value="${choice}" required>${choice}`;
  return choiceWrapper;
}

// quiz functionality

function addFunctionality() {
  const nextBtns = document.querySelectorAll(`.next:not([type="submit"])`);
  nextBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      checkAnswer(btn, i);
      currentQuestion++;
      showQuestion(currentQuestion);
    });
  });
}

function checkAnswer(btn, i) {
  const userAnswer = btn.parentElement.querySelector("input:checked").value;
  const correctAnswer = answers[i];
  if (userAnswer === correctAnswer) {
    score++;
  }
  cl(score);
}

function showQuestion(currentQuestion) {
  const questions = document.querySelectorAll(".question-wrapper");

  questions.forEach((q, i) => {
    if (i === currentQuestion) {
      q.style.display = "flex";
      q.querySelectorAll("input").forEach((input) => (input.required = true));
    } else {
      q.style.display = "none";
      q.querySelectorAll("input").forEach((input) => (input.required = false));
    }
  });
}

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".page-header .txt-shadow").innerText = "Results";
  scoreWrapper.innerText = `${score}/${answers.length}`;
  document.body.classList.add("show-results");
});
