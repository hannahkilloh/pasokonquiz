// Define an array of quiz questions and answers
const quiz = [
  {
    question: "What is the capital of France?",
    options: ["a) Paris", "b) London", "c) Berlin", "d) Rome"],
    answer: "a"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["a) Venus", "b) Mars", "c) Jupiter", "d) Saturn"],
    answer: "c"
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["a) Australia", "b) Canada", "c) Brazil", "d) China"],
    answer: "a"
  }
];

// Get HTML elements
const questionContainer = document.getElementById("question-container");
const contentContainer = document.getElementById("content-container");
const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");

// Function to start the quiz
function startQuiz() {
  startBtn.style.display = "none";
  score = 0;
  currentQuestion = 0;
  displayQuestion();
}

// Function to display a question
function displayQuestion() {
  questionDict = quiz[currentQuestion];
  questionContainer.textContent = questionDict.question;
  contentContainer.innerHTML = "";

  for (let i = 0; i < questionDict.options.length; i++) {
    option = document.createElement("button");
    option.textContent = questionDict.options[i];
    option.classList.add("option-btn");
    option.dataset.question = questionDict.options[i].charAt(0);
    option.addEventListener("click", handleOptionClick);
    contentContainer.appendChild(option);
  }
}

function handleOptionClick(event) {
  questionLetter = event.target.dataset.question;

  if (questionLetter === quiz[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion >= quiz.length) {
    displayResults();
    return;
  } else {
    displayQuestion();
  }
}

// Function to display quiz results
function displayResults() {
  questionContainer.textContent = "";
  contentContainer.textContent = `Your score is ${score} out of ${quiz.length}`;

  // Display different responses based on the score
  if (score === quiz.length) {
    contentContainer.textContent += "\nCongratulations! You got a perfect score!";
  } else if (score >= quiz.length * 0.65) {
    contentContainer.textContent += "\nGreat job! You did well!";
  } else {
    contentContainer.textContent += "\nKeep practicing! You can improve!";
  }

  retryBtn.style.display = "inline-block";
}

// Function to retry the quiz
function resetQuiz() {
  retryBtn.style.display = "none";
  startBtn.style.display = "inline-block";
  contentContainer.innerHTML = "";
}