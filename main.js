const quiz = [
  {
    question: "Let's Go! Here is your first question: Who was the world's first computer programmer?",
    options: ["a) Alan Turing", "b) Ada Lovelace", "c) Grace Hopper", "d) Jacque de Vancason"],
    answer: "b"
  },
  {
    question: "If you guessed Ada Lovelace, well done! In 1842 Ada Lovelace translated Babbage's Analytical Engine from English to French.\n\nQuestion 2: In 1952, American computer scientist, Grace Hopper, developed a system that could convert plain English into computer code. What is the name of this coding language?",
    options: ["a) Binary", "b) APL", "c) COBOL", "d) C"],
    answer: "c"
  },
  {
    question: "The first computer virus was created in 1971 by Bob Thomas. But what the first virus called?",
    options: ["a) The Sneeker", "b) The Sweeper", "c) The Reaper", "d) The Creeper"],
    answer: "d"
  },
	{
    question: "In 1975 Atari released its first home computer game console, but what was the name of the game thatt was pre-loaded onto its system?",
    options: ["a) Snake", "b) Pong", "c) Tennis", "d) Tetris"],
    answer: "b"
  },
	{
    question: "What was the first 3D character platformer action game released for the Playstation 1 in 1996?",
    options: ["a) Tomb Raider", "b) Banjo-Kazooie", "c) Crash Bandicoot", "d) Spyro"],
    answer: "c"
  },
  {
    question: "If you answered 'Crash Bandicoot', congrats!\n\nWhile we're talking about Crash, what was the name of the game developer that brought the cheeky bandicoot into our lives?",
    options: ["a) Naughty Dog", "b) Capcom", "c) Insomniac Games", "d) Konami"],
    answer: "a"
  },
  {
    question: "Did you guess Naughty Dog, no? Yes? Idk, I'm a JavaScript Program.\n\nAnyway, next question! Sticking with gaming, what is the best-selling gaming console of all time?",
    options: ["a) Playstation 2", "b) Nintendo 64", "c) Playstation 4", "d) Xbox 360"],
    answer: "a"
  },
	{
    question: "I know! The Playstation 2? Who knew!\n\nNow let's head up through the stratosphere and into orbit. What was the first video game console played in space?",
    options: ["a) SEGA Megadrive", "b) GameBoy Colour", "c) NES", "d) GameBoy"],
    answer: "d"
  },
  {
    question: "Games look so good nowadays right? But why is that?\n\nWell...many reasons, but a big one is the lighting. What is the name of the lighting algorithims that generate natural light in games?",
    options: ["a) Light-tracing", "b) Ray-tracing", "c) Sun-tracing", "d) Beam-tracing"],
    answer: "b"
  },
  {
    question: "Now...let's get quantum!\n\nHere's you last question: Quantum Computing is different from the computers we know now because its binary code can simultanously be a 0 and a 1 (i.e. multiple states) until it is processed/observed. Wacky right? What is the technical name for this phenomena?",
    options: ["a) Dualposition", "b) Diptychpostion", "c) Superposition", "d) Megapostion"],
    answer: "c"
  }
];

// Get HTML elements
// const questionContainer = document.getElementById("question-container");
const contentContainer = document.getElementById("content-container");
const buttonContainer = document.getElementById("button-container");
const textContainer = document.getElementById("text-container");
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
  textContainer.innerHTML = "";
  buttonContainer.innerHTML = "";

  question = document.createElement("p");
  question.innerText = questionDict.question;
  textContainer.appendChild(question);

  for (let i = 0; i < questionDict.options.length; i++) {
    option = document.createElement("p");
    option.innerText = questionDict.options[i];
    textContainer.appendChild(option);
  }

  for (let i = 0; i < questionDict.options.length; i++) {
    option = document.createElement("button");
    option.textContent = questionDict.options[i].charAt(0);
    option.classList.add("option-btn");
    option.dataset.question = questionDict.options[i].charAt(0);
    option.addEventListener("click", handleOptionClick);
    buttonContainer.appendChild(option);
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
  buttonContainer.innerHTML = "";
  textContainer.innerHTML = `Your score is ${score} out of ${quiz.length}`;

  // Display different responses based on the score
  if (score === quiz.length) {
    textContainer.textContent += "\nCongratulations! You got a perfect score!";
  } else if (score >= quiz.length * 0.65) {
    textContainer.textContent += "\nGreat job! You did well!";
  } else {
    textContainer.textContent += "\nKeep practicing! You can improve!";
  }

  retryBtn.style.display = "inline-block";
}

// Function to retry the quiz
function resetQuiz() {
  retryBtn.style.display = "none";
  startBtn.style.display = "inline-block";
  textContainer.innerHTML = "";
}