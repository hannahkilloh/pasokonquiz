// Define an array of quiz questions and answers for each level
const quiz = {
    easy: [
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
    ],
    medium: [
      {
        question: "Which year did World War I start?",
        options: ["a) 1914", "b) 1916", "c) 1918", "d) 1920"],
        answer: "a"
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["a) Vincent van Gogh", "b) Pablo Picasso", "c) Leonardo da Vinci", "d) Michelangelo"],
        answer: "c"
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["a) Au", "b) Ag", "c) Cu", "d) Fe"],
        answer: "a"
      }
    ],
    hard: [
      {
        question: "Which scientist proposed the theory of relativity?",
        options: ["a) Isaac Newton", "b) Albert Einstein", "c) Nikola Tesla", "d) Galileo Galilei"],
        answer: "b"
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["a) Liver", "b) Brain", "c) Heart", "d) Skin"],
        answer: "d"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["a) Venus", "b) Jupiter", "c) Mars", "d) Saturn"],
        answer: "c"
      }
    ]
  };
  
  // Function to start the quiz
  function startQuiz() {
    const level = prompt("Choose a level: easy, medium, or hard");
  
    if (level === "easy" || level === "medium" || level === "hard") {
      const questions = quiz[level];
      const responses = [];
      let score = 0;
      let i = 0;
  
      while (i < questions.length) {
        const response = prompt(generateQuestion(questions[i]));
        responses.push(response);
  
        if (response.toLowerCase() === questions[i].answer.toLowerCase()) {
          console.log("Correct!");
          score++;
        } else {
          console.log("Wrong!");
        }
  
        i++;
      }
  
      displayResults(responses, score, level);
    } else {
      console.log("Invalid level! Please choose a valid level.");
    }
  }
  
  // Function to generate a formatted question string
  function generateQuestion(questionObj) {
    const question = questionObj.question;
    const options = questionObj.options.join("\n");
  
    return `${question}\n${options}`;
  }
  
  // Function to display quiz results
  function displayResults(responses, score, level) {
    console.log("Quiz complete! Here are your results:");
  
    for (let i = 0; i < quiz[level].length; i++) {
      const question = quiz[level][i].question;
      const answer = quiz[level][i].answer;
      const userResponse = responses[i];
  
      console.log(`Question: ${question}\nYour Answer: ${userResponse}\nCorrect Answer: ${answer}`);
    }
  
    console.log(`Your score is ${score} out of ${responses.length}`);
  
    // Display different responses based on the score
    if (score === responses.length) {
      console.log("Congratulations! You got a perfect score!");
    } else if (score >= responses.length * 0.7) {
      console.log("Great job! You did well!");
    } else {
      console.log("Keep practicing! You can improve!");
    }
  }
  
  // Start the quiz
  startQuiz();
  