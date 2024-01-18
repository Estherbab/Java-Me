// Declaring all the required variables for the code quiz
var timer = document.querySelector(".timer")
var secondscounter = 5
var timeLeft = 10
var timeEl = document.querySelector(".timer")
var startScreen = document.querySelector(".start")
var startButton = document.querySelector(".btn")
//var displayquestions = document.querySelector(".hide")
var questionsContainer = document.getElementById("questions");
var endScreen = document.getElementById("end-screen")
var finalScore = document.getElementById("final-score")
var initials = document.getElementById("initials")
var submit = document.getElementById("submit")
var feedback = document.getElementById("feedback")
var highScores = document.querySelector(".scores")
var questiontitle = document.getElementById("question-title")
var choicesEl = document.getElementById("choices")


// Function declared when start button is clicked, the startscreen is hidden and quiz screen shown    
function startQuiz() {
// The timer variable is declared above and this sets the timer to start. The timer shows
// on the window and is also shown in the console log. Once the timer gets to 0 it stops
var timerInterval = setInterval(function () {
    if (secondscounter >= 1) { 
        secondscounter --                                    // timer logs every second
        timer.textContent = secondscounter;                      // timer textcontent shows in window
     //   console.log(secondscounter);                            // timer will appear in the console
    } else if (secondscounter <= 0) {                         // when counter is = 0 stop count
        timer.textContent = secondscounter; 
        clearInterval(timerInterval);                         // clear the counter
       // sendMessage();
    }
    }, 1000); //1 second = 1000 milliseconds

    console.log("Quiz Started!");                                     // console.log when quiz starts
    startScreen.style.display = 'none';                              // hides the start screen
    console.log(questionsContainer)                                  // displays the questions in console
    questionsContainer.style.display = 'block';                       // displays the questions in window
    start.classList.add('hide');                                  // hides the start button
    displayquestions()
}
startButton.addEventListener('click', startQuiz);

var questionIndex = 0
// Function to display the codequizQuestions once the start button is clicked
function displayquestions() {
    choicesEl.innerHTML = ""; // done to
    var currentQuestion = codequizQuestions[questionIndex];
    console.log(currentQuestion)
    console.log(questionIndex)
    questiontitle.textContent = currentQuestion.question
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let choiceButton = document.createElement('button');
        choiceButton.textContent = currentQuestion.choices[i]
        choicesEl.appendChild(choiceButton)

// add event listener on choices buttons to
choiceButton.addEventListener("click", function(event){
    console.log(event.target.textContent)
    if(event.target.textContent === currentQuestion.correctanswer) {
        console.log("correct") // checking the string is correct
        
    } else {
        console.log("incorrect");
        secondscounter -= 5 
    }
    
    if(questionIndex < codequizQuestions.length - 1){
        questionIndex++
        displayquestions();
    } else {
        endScreen.classList.remove("hide")
        questions.style.display = "none"
        secondscounter = 0
        console.log('last question')
    }
});
    }
//console.log("you clicked choice")
}


//eachQuestion.textContent = codequizQuestions.questions;
//choicesEl.innerHTML = '';
//codequizQuestions.forEach((arrayitem) => {

//var questionTitle = document.getElementById("question-title")
//questionTitle.textContent = arrayitem.question
//choiceButton.textContent = answers;
//choiceButton.classList.add('choice');
//choiceButton.addEventListener ('click', () => checkAnswer (index)); 
//answerChoices.appendChild(choiceButton);
//});
//}

//nextButton.style.display = 'none';