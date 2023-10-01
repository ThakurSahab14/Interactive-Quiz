const questions = [
    {
        question: "What is the purpose of inheritance in OOP?",
        options: ["Code reusability", "Data hiding", "Method overloading", "Exception handling"],
        answer: "Code reusability"
    },
    {
        question: "What is the purpose of abstraction in OOP?",
        options: ["To hide implementation details and show only essential features", "To make code more complex", "To prevent inheritance", "To enforce encapsulation"],
        answer: "To hide implementation details and show only essential features"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "How can you select all the paragraphs on a web page in CSS?",
        options: ["p { }", "paragraph { }", ".p { }", "#paragraphs { }"],
        answer: "p { }"

    },
    {
        question: "What does the 'Cascading' in CSS refer to?",
        options: ["Cascading refers to the order of styles applied", "Cascading refers to waterfalls", "Cascading refers to rainbows", "Cascading refers to animations"],
        answer: "Cascading refers to the order of styles applied"
    }
];

let currentquestionIndex = 0;
let score = 0;
let timer;
const timeLimit = 10;

const question = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-button');


function restartQuiz() {
    score = 0;
    currentquestionIndex = 0;
    loadquestion();
}

function loadquestion() {

    clearInterval(timer);

    const currentquestion = questions[currentquestionIndex];
    question.textContent = currentquestion.question;
    resultElement.textContent = "";
    scoreElement.textContent = ``;
    nextButton.style.display = 'flex';
    optionsElement.innerHTML = '';
    currentquestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');
        button.addEventListener('click', () => checkanswer(option));
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
            timeLeft.textContent = `${timeRemaining}s`;
        }
    }, 1000);
}

function checkanswer(selectedOption) {
    clearInterval(timer);

    const currentquestion = questions[currentquestionIndex];
    if (selectedOption === currentquestion.answer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = 'Green';
        score++;
    } else {
        resultElement.textContent = "Wrong!";
        resultElement.style.color = 'Red';
    }

    currentquestionIndex++;

    if (currentquestionIndex < questions.length) {
        setTimeout(loadquestion, 1000);
    } else {
        showFinalScore();
    }
}

function timeIsUp() {
    resultElement.textContent = "Time's up!";
    currentquestionIndex++;

    if (currentquestionIndex < questions.length) {
        loadquestion();
    } else {
        showFinalScore();
    }
}

function nextquestion() {
    currentquestionIndex++;
    if (currentquestionIndex < questions.length) {
        loadquestion();
    } else {
        showFinalScore();
    }
}

function nextQuestion() {
    currentquestionIndex++;
    if (currentquestionIndex < questions.length) {
        loadquestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    question.textContent = "Quiz Completed!";
    optionsElement.innerHTML = '';
    resultElement.textContent = '';
    nextButton.style.display = 'none';
    timeLeft.textContent = '';
    document.getElementById('timeLeft').textContent = '';
    document.getElementById('next-button').style.display = 'none';
    scoreElement.textContent = `Your Final Score is: ${score}`;
    // console.log(score);
}

loadquestion();
