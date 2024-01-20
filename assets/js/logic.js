// Declaring all the required variables for the code quiz questions
var timer = document.querySelector(".timer")
var secondscounter = 60
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
        secondscounter --                                                       // -1 is deducted from the timer
        timer.textContent = secondscounter;                                    // timer textcontent shows in window
     //   console.log(secondscounter);                                        // timer will appear in the console
    } else if (secondscounter <= 0) {                                        // if timer is less than or = to 0 stop the count
        timer.textContent = secondscounter;                                 // the textcontent of the timer is equal to the seconds
        clearInterval(timerInterval);                                      // stop & clear the timerinterval 
       // sendMessage();
    }
    }, 1000); //1 second = 1000 milliseconds

    console.log("Quiz Started!");                                         // console.log when quiz starts
    startScreen.style.display = 'none';                                  // hides the start screen
    console.log(questionsContainer)                                     // displays the questions in the console
    questionsContainer.style.display = 'block';                        // displays the questions container in the window
    start.classList.add('hide');                                      // hides the start button
    displayquestions()
}
startButton.addEventListener('click', startQuiz);

var questionIndex = 0
// Function to display the codequizQuestions once the start button is clicked
function displayquestions() {
    choicesEl.innerHTML = "";                                            // done to retrieve whats inside the choices element in html
    var currentQuestion = codequizQuestions[questionIndex];             // variable for codequizquestions array with the index for the question title
    console.log(currentQuestion)                                       // to see the currentquestion in the console
    console.log(questionIndex)                                        // to see the question number in console
    questiontitle.textContent = currentQuestion.question             // this is to display the textcontent of each question
    for (let i = 0; i < currentQuestion.choices.length; i++) {      // 
        let choiceButton = document.createElement('button');       // to create the choice button for each question
        choiceButton.textContent = currentQuestion.choices[i]     // the text content for each choice button = the current question title, all the choices & the index number of the choices
        choicesEl.appendChild(choiceButton)                      // adds a new child node to the existing parent node in html 

// add event listener on choices buttons to
choiceButton.addEventListener("click", function(event){                         // function waits for the choicebutton to be clicked(event) then responds to it
    console.log(event.target.textContent)                                      // console log to see if eventlistener is working
    if(event.target.textContent === currentQuestion.correctanswer) {          // if the button clicked is = to the correct answer, then the answer is correct
        console.log("correct")                                               // checking the string is correct
        
    } else {
       console.log("incorrect");                                          // consolelog incorrect if the button clicked is the wrong answer
        secondscounter -= 5                                               // deduct 5 seconds from timer if user clicks wrong answer
    }
    
    if(questionIndex < codequizQuestions.length - 1){                   // if the question index is less than the codequizquestions length -1 then keep going through the questions
        questionIndex++                                                // this is to loop through each question (++ adds 1)
        displayquestions();                                           // keep displaying the questions as you go through the loop
    } else {                                                         // else if the above conditions are not met, execute the code below
            console.log('last question')                            // when the last question is answered log in console
            endScreen.classList.remove("hide")                     // the hide class of the end screen is removed and the endscreen is displayed
            questions.style.display = "none"                      // the questions screen is hidden
            secondscounter = 0                                   // secondscounter is emptied to 0
            timer.style.display = "none"                        // hides the timer when endscreen is displayed
    }
       
});
    }   
}

//eachQuestion.textContent = codequizQuestions.questions;
//choicesEl.innerHTML = '';
//codequizQuestions.forEach((arrayitem) => {

//var questionTitle = document.getElementById("question-title")
//let choiceButton = document.createElement('button')
//var currentQuestion = codequizQuestions[questionIndex];   
//var i = 0
//questionTitle.textContent = codequizQuestions.question
//choiceButton.textContent = currentQuestion.choices[i];
//choiceButton.classList.add('choice');
//choiceButton.addEventListener ('click', () => checkAnswer (index)); 
//choicesEl.appendChild(choiceButton);
//});
//}

//nextButton.style.display = 'none';