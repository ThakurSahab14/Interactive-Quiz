const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Shakespeare", "Hemingway", "Tolstoy", "Fitzgerald"],
        answer: "Shakespeare"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timeLimit = 10;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-button');
// const FinalScore = document.getElementById('FinalScore');

function loadQuestion() {
    clearInterval(timer); 

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    let timeRemaining = timeLimit;
    timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            timeIsUp();
        } else {
            timeRemaining--;
            timeleft.textContent = `${timeRemaining}s`;
            ;
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    clearInterval(timer); 

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
   
}

function timeIsUp() {
    resultElement.textContent = "Time's up!";
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
    
}

function showFinalScore() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = '';
    resultElement.textContent = '';
    nextButton.style.display = 'none';
    timeLeft.textContent = '';
    document.getElementById('timeleft').textContent = '';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('score').textContent = `Score: ${score}`; 
    console.log(score);
}
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}


loadQuestion();
