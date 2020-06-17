const questionElement = document.getElementById("Question")
const startButton = document.getElementById("startButton")
const nextButton = document.getElementById("nextButton")
const questionBox = document.getElementById("questionBox")
const answerButtonsElement = document.getElementById("answerButtons")

startButton.addEventListener("click", start)
nextButton.classList.add("hide")

function start() {
  startButton.classList.add("hide")
  nextButton.classList.add("show")

  
}

const questions = [
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Parsing Index", correct: false },
      { text: "Application Protocol Information", correct: false },
      { text: "Application Programming Interface", correct: true },
      { text: "Application Programming Index", correct: false }
    ]
  },
  {
    question: "Which of the following are all objects in Javascript?",
    answers: [
      { text: "Arrays, Functions, and Objects", correct: true },
      { text: "Functions, Objects, and Properties", correct: false },
      { text: "Arrays, Objects, and Methods", correct: false },
      { text: "Arrays, Objects, and Keywords", correct: false }
    ]
  },
  {
    question: "What is jQuery?",
    answers: [
      { text: "A Javascript API", correct: false },
      { text: "A Javascript Library", correct: true },
      { text: "A Javascript Framework", correct: false },
      { text: "Vanilla Javascript", correct: false }
    ]
  },
  {
    question: "What is Bootstrap?",
    answers: [
      { text: "A framework for developing respoonsive and mobile-first websites.", correct: true },
      { text: "A type of API that is currently the popular CSS framework.", correct: false },
      { text: "A type of Javascript library used for rapid devlopment.", correct: false },
      { text: "A framework for properly formatting pseudocode on large projects.", correct: false }
    ]
  },
  {
    question: "What are Javascript operators?",
    answers: [
      { text: "Symbols used to perform arithmetic or assign value to variables", correct: true },
      { text: "Methods such as indexOf(), lastIndexOf, and search().", correct: false },
      { text: "The values associated with objects in Javascript.", correct: false },
      { text: "Functions stored as object properties.", correct: false }
    ]
  },
  {
    question: "Which of the following are *not* arithmetic operators in Javascript?",
    answers: [
      { text: "+ -", correct: false },
      { text: "% ++", correct: false },
      { text: "* **", correct: false },
      { text: "= /=", correct: true }
    ]
  },
  {
    question: "Which of the following is *not* an assignment operator?",
    answers: [
      { text: "*=", correct: false },
      { text: "+=", correct: false },
      { text: "/", correct: true },
      { text: "=", correct: false }
    ]
  },
  {
    question: "Which of the following options correctly describes how == and === operators would evaluate '0' and 0 (zero as a string vs as a number)?",
    answers: [
      { text: "(true, true)", correct: false },
      { text: "(false, true)", correct: false },
      { text: "(false, false)", correct: false },
      { text: "(true, false)", correct: true }
    ]
  },
  {
    question: "Tough Question: Which of the following is a github *repo* link?",
    answers: [
      { text: "github.com/pulls/repositoryname", correct: false },
      { text: "github.com/repositoryname", correct: false },
      { text: "github.com/username/repositoryname", correct: true },
      { text: "github.io/username/respositoryname", correct: false }
    ]
  },
  {
    question: "Tough Question: Which of the following is a github *deploy* link?",
    answers: [
      { text: "github.io/username/respositoryname", correct: false },
      { text: "username.github.io/repositoryname/", correct: true },
      { text: "github.com/repositoryname", correct: false },
      { text: "github.com/pulls/repositoryname", correct: false },
    ]
  },
]