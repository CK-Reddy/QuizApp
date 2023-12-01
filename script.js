const questions = [
  {
    question: "Which continent is home to the Sahara Desert?",
    answers: [
      { text: "Africa", correct: true },
      { text: "Asia", correct: false },
      { text: "South America", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "Which two elements make up the majority of the Earth's core?",
    answers: [
      { text: "Oxygen and Silicon", correct: false },
      { text: "Iron and Nickel", correct: true },
      { text: "Gold and Silver", correct: false },
      { text: "Hydrogen and Helium", correct: false },
    ],
  },
  {
    question: "What is the largest mammal on Earth?",
    answers: [
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Skin", correct: true },
      { text: "Heart", correct: false },
      { text: "Liver", correct: false },
      { text: "Brain", correct: false },
    ],
  },
  {
    question: "Which famous playwright wrote the tragedy 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "In which year did the Titanic sink after hitting an iceberg?",
    answers: [
      { text: "1912", correct: true },
      { text: "1907", correct: false },
      { text: "1921", correct: false },
      { text: "1933", correct: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
    ],
  },

  {
    question: "Which planet in our solar system has the most moons?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "What is the largest land animal on Earth?",
    answers: [
      { text: "African Elephant", correct: true },
      { text: "Giraffe", correct: false },
      { text: "White Rhino", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
  },
  {
    question:
      "Which famous scientist formulated the laws of motion and universal gravitation?",
    answers: [
      { text: "Isaac Newton", correct: true },
      { text: "Albert Einstein", correct: false },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
