var timer = document.querySelector("#time")
var secondscounter = 60
var timeLeft = 10
var timeEl = document.querySelector("#time")




// This sets the time in variable ..........//
var timerInterval = setInterval(function () {
    if (secondscounter -= 1) {
        timer.textContent = secondscounter;
        console.log(secondscounter);
    } else if (secondscounter === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
    }, 1000); //1 second = 1000 milliseconds.........//