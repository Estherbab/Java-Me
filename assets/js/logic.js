var timer = document.querySelector("#time")
var secondscounter = 60
var timeLeft = 10
var timeEl = document.querySelector("#time")
var startScreen = document.querySelector(".start")
var startButton = document.querySelector(".btn")
var displayquestions = document.querySelector(".hide")



// The timer variable is declared above and this sets the timer to start. The timer shows //
// on the window and is also shown in the console log. Once the timer gets to 0 it stops //
var timerInterval = setInterval(function () {
    if (secondscounter -= 1) {
        timer.textContent = secondscounter;
        console.log(secondscounter);
    } else if (secondscounter === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
    }, 1000); //1 second = 1000 milliseconds //

function startQuiz() {
    console.log("Quiz Started!");
    startScreen.style.display = 'none';
    displayquestions.style.display = 'block';
    console.log(displayquestions)
    start.classList.add('hide');
}
startButton.addEventListener('click', startQuiz);