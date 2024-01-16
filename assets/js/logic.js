var timer = document.querySelector("#time")
var secondscounter = 60
var timeLeft = 10
var timeEl = document.querySelector("#time")
var startScreen = document.querySelector(".start")
var startButton = document.querySelector(".btn")
var displayquestions = document.querySelector(".hide")
var questionsContainer = document.getElementById("#questions");



// The timer variable is declared above and this sets the timer to start. The timer shows
// on the window and is also shown in the console log. Once the timer gets to 0 it stops
var timerInterval = setInterval(function () {
    if (secondscounter -= 1) {
        timer.textContent = secondscounter;
        console.log(secondscounter);
    } else if (secondscounter === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
    }, 1000); //1 second = 1000 milliseconds

// Function declared when start button is clicked, the startscreen is hidden and quiz screen shown    
function startQuiz() {
    console.log("Quiz Started!");
    startScreen.style.display = 'none';
    displayquestions.style.display = 'block';
    console.log(displayquestions)
    start.classList.add('hide');
}
startButton.addEventListener('click', startQuiz);

// Function to display the codequizQuestions once the start button is clicked
function displayquestions() {
    console.log(codequizQuestions)
eachQuestion.textContent = codequizQuestions.questions;
answerChoices.innerHTML = '';
codequizQuestions.answers.forEach ((answers) => {
const choiceButton = document. createElement ( 'button');
choiceButton.textContent = answers;
choiceButton.classList.add('choice');
choiceButton.addEventListener ('click', () => checkAnswer (index)); 
answerChoices.appendChild(choiceButton);
});
}

nextButton.style.display = 'none';