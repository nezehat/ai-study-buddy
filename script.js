let score = 0;
const topics = {
  python: {
    explanation: "Python is a popular programming language used for web, AI, and more.",
    question: "Which keyword is used for loops in Python?",
    answer: "for"
  },
  html: {
    explanation: "HTML is used to structure web pages.",
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  }
};

function startLearning() {
  const input = document.getElementById("topic").value.toLowerCase();
  const content = document.getElementById("content");
  const randomIndex = Math.floor(Math.random() * topics[key].length);
  const selected = topics[key][randomIndex];

  if (topics[input]) {
    const topics = {
      python: [
        {
          explanation: "Python is a programming language.",
          question: "Which keyword is used for loops?",
          answer: "for"
        },
        {
          explanation: "Python uses indentation.",
          question: "Is indentation important in Python?",
          answer: "yes"
        }
      ]
    };

function checkAnswer(topicName) {
  const userAnswer = document.getElementById("userAnswer").value.toLowerCase();
  const correctAnswer = topics[topicName].answer;
  const result = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    score++;
    result.innerHTML = " Correct! Score: " + score;
  } else {
    result.innerHTML = " Wrong! Correct answer: " + correctAnswer;
  }
}