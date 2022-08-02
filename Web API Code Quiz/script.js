const startButton = document.getElementById('start-btn');
const nexrButton = document.getElementById('next-btn');
const questionsContainerEl = document.getElementById('questionsCon');

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var score = 0;

let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: 'Which is a function ?',
        answers: [
            { text: 'function()', correct: true},
            { text: 'method()', correct: false},
            { text: 'variable ()', correct: false},
            { text: 'class()', correct: false},
        ]
    }, 
    {
        question: 'Which should we use for strict equality comparisons?',
        answers: [
            { text: '=', correct: false},
            { text: '==', correct: false},
            { text: '===', correct: true},
        ]
    }, 
    {
        question: 'Javascript is a ____-side programming language',
        answer: [
            { text: 'client', correct: false},
            { text: 'server', correct: false},
            { text: 'both', correct: true},
            { text: 'none', correct: false},
        ]
    },
    {
        question: 'If you type the following code in the console window, what results will you get? 3>2>1===false;',
        answer: [
            { text: 'true', correct: true},
            { text: 'false', correct: false},
        ]
    }
]

// start button
startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide');
    quesstionContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionsIndex = 0;
    nextQuestion() ;
    nextButton.classList.remove('hide');
}
//start the questions
function startGame() {

    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove('hide');
    currentQuestionsIndex = 0;
    nextQuestion();
    nextButton.classList.remove('hide');
}

// show questions
function showQuestion(questioins) {
    questionElement.innerText = questions.question;
    console.log(questions);
    question.answers.forEach(answer => {
        const button = document.creatElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (seconds === 0) {
            alert('Game Over!')
        }
    }, 1000);
}

startButton.addEventListener('click', startGame);
startButton.addEventListener("click", function() {
    var twoMinutes = 60 * 2,
    desplay = document.querySelector('#time');
    startTimer(twoMinutes, display);
});

//reset 
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//test  loop
function questionsloop(questions) {

    for (var i = 0; i < questions.length; i++);
    questions.innerText('#questions');
    if (answer.correct) {
        button.dataset.correct = answer.correct 
        score ++;
    }
    score.innerText('Correct')
}

//Next Questions 
function nextQuestion() {
    function nextQuestion() {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
}