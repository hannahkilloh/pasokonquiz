// array containing quiz information
const quiz = [
  {
    question: "Let's Go! Here is your first question: Who was the world's first computer programmer?",
    options: ["a) Alan Turing", "b) Ada Lovelace", "c) Grace Hopper", "d) Charles Babbage"],
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
    question: "In 1975 Atari released its first home computer game console, but what was the name of the game that was pre-loaded onto its system?",
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
    options: ["a) Dualposition", "b) Diptychpostion", "c) Superposition", "d) Multipostion"],
    answer: "c"
  }
];


// Gets HTML elements
const questionContainer = document.getElementById("question-container");
const contentContainer = document.getElementById("content-container");
const buttonContainer = document.getElementById("button-container");
const textContainer = document.getElementById("text-container");
const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");

// Function to start the quiz
function startQuiz() {
  startBtn.style.display = "none"; // hides the start button so that it's not there until it is called
  score = 0; // sets the starting score to '0'
  currentQuestion = 0; // sets the current question to '0' aka the beginning
  displayQuestion(); // displays the first quiz question
}

// Function to display a question
function displayQuestion() {
  questionDict = quiz[currentQuestion]; // gets the current question from quiz array based on 'currentQuestion' variable
  textContainer.innerHTML = ""; // clears the HTML 'textContainer' content to ready for next question/string
  buttonContainer.innerHTML = ""; // clears the HTML 'buttonContainer' to ready for next button(s)

  question = document.createElement("p"); // creates a new paragraph element "p" to represent the question
  question.innerText = questionDict.question; // sets the text content of the question element to the 'question' property of the current question object
  textContainer.appendChild(question); // Adds (appends) the question element to the 'textContainer' to display the question

  // For loop iterates through questions and creates a paragraph element for each question answered by the user
  for (let i = 0; i < questionDict.options.length; i++) {
    option = document.createElement("p"); // creates a new paragraph element "p" to represent an answer option
    option.innerText = questionDict.options[i]; // sets the text content of the option element to the corresponding answer option in the quiz array using 'questionDict.options'
    textContainer.appendChild(option); // adds the option element to the 'textContainer' to display on screen
    // console.log(option);
  }

  // For loop that iterates over the 'options' array of 'questionDict'
  for (let i = 0; i < questionDict.options.length; i++) { // Sets variable 'i' as '0', and the loop will continue as long as 'i' is less than the length of the options array. After each iteration, 'i' will be incremented by 1.
    option = document.createElement("button"); // Inside the loop, this line creates a new <button> element using the document.createElement() method. The variable option is then assigned to this button.
    option.textContent = questionDict.options[i].charAt(0); // Sets the text content of the option button to the first character of the string stored in the i-th element of the options array in 'questionDict'.
    option.classList.add("option-btn"); // Adds CSS class "option-btn" to the 'option' button. 
    option.dataset.question = questionDict.options[i].charAt(0); // Sets attribute 'question' on the 'option' button. 
    option.addEventListener("click", handleOptionClick); // Adds event listener to the 'option' button. It listens for the "click" event and calls the 'handleOptionClick' function when the button is clicked.
    buttonContainer.appendChild(option); // Appends the 'option' button as a child to the 'buttonContainer' element. Adds the button to the DOM to display it on the webpage
  }
  console.log(questionDict.question); // Outputs the value of the 'question' property from the 'questionDict' object to the console. 
  console.log(questionDict.options); // Outputs the value of the 'options' property from the 'questionDict' object to the console. 
}

// Defines 'handleOptionClick' function()
function handleOptionClick(event) {
  questionLetter = event.target.dataset.question; // Extracts the value assigned to the 'question' attribute of the clicked element and assigns it to the 'questionLetter' variable.

  if (questionLetter === quiz[currentQuestion].answer) { // Checks if the 'questionLetter' matches the correct answer for the current question in the quiz array. 
    score++; // If 'questionLetter' matches the correct answer, the 'score' variable is incremented by one.
  }
  currentQuestion++; // Increments the currentQuestion variable by one.

  if (currentQuestion >= quiz.length) { // Checks if the currentQuestion index has exceeded the length of the quiz array i.e. if all Q's have been answered.
    displayResults(); // If all Q's have been answered, displayResults() function is called and final score is displayed.
    return;
  } else {
    displayQuestion(); // If all Q's have not been answered, it displays the next question using 'displayQuestion()' function
  }
}

// Function to display quiz results
function displayResults() { 
  buttonContainer.innerHTML = ""; // Clears contents of the 'buttonContainer' element. Removes any buttons/options that were previsouly displayed
  textContainer.innerHTML = `Your score is ${score} out of ${quiz.length}`; // Sets the inner HTML of the 'textContainer' element to display the user's score.
  console.log(`Your score is ${score} out of ${quiz.length}`); // Outputs the same information to the console. This isn't technically necessary here but I've included it to meet the question console.log() requirements.

  // Display different responses based on the score
  if (score === quiz.length) { // If the score is equal to the length of the quiz array (i.e. full points), it will display a winning message
    textContainer.textContent += "\nCongratulations! Perfect score! You're a genius!";
    console.log("\nCongratulations! Perfect score! You're a genius!"); // Same console display for 10/10 congrats message
  } else if (score >= quiz.length * 0.65) { // If the score is greater than or equal to 65% of the length of the quiz array, it will display a specific message
    textContainer.textContent += "\nGreat job! You're Ace!"; 
    console.log("\nGreat job! You're Ace!");// Same console display for 65% or more score
  } else {
    textContainer.textContent += "\nKeep practicing! You got this!"; // If the score doesn't meet any of the previous requirements it will display this message
    console.log("\nKeep practicing! You got this!"); // Same as above but for the console
  }

  retryBtn.style.display = "inline-block"; // Displays retry button on the page
}

// Function to retry the quiz
function resetQuiz() {
  retryBtn.style.display = "none"; // Sets the 'display' style property of the 'retryBtn' element to "none".
  startBtn.style.display = "inline-block"; // Sets the 'display' style property of the 'startBtn' element to "inline-block".
  textContainer.innerHTML = ""; // Sets the inner HTML of the textContainer element to an empty string. This clears anthing that was in the 'textContainer' element before.
}