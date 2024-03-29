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
var questiontitle = document.getElementById("question-title")
var choicesEl = document.getElementById("choices")
var feedback = document.getElementById("feedback")
var highscoresEl = document.getElementById("highscores")
var submitButton = document.getElementById("submit")
var userScore = document.querySelector(".scores")
var finalScore = localStorage.getItem("final-score")
var inputInitials = document.getElementById("initials")
var score
var finalscoreSpan = document.getElementById("final-score")






// Function declared when start button is clicked, the startscreen is hidden and quiz screen shown    
function startQuiz() {
// The timer variable is declared below and this sets the timer to start. The timer shows
// on the window and is also shown in the console log. Once the timer gets to 0 it stops
var timerInterval = setInterval(function () {
    if (secondscounter >= 1) { 
        secondscounter --                                                                     // -1 is deducted from the timer
        timer.textContent = secondscounter;                                                  // timer textcontent shows in window
     //   console.log(secondscounter);                                                      // timer will appear in the console
    } else if (secondscounter <= 0) {                                                      // if timer is less than or = to 0 stop the count
        timer.textContent = secondscounter;                                               // the textcontent of the timer is equal to the seconds
        clearInterval(timerInterval);                                                    // stop & clear the timerinterval 
       // sendMessage();
    }
    }, 1000); //1 second = 1000 milliseconds, Execute every second

    console.log("Quiz Started!");                                                          // console.log when quiz starts
    startScreen.style.display = 'none';                                                   // hides the start screen
    console.log(questionsContainer)                                                      // displays the questions in the console
    questionsContainer.style.display = 'block';                                         // displays the questions container in the window
    start.classList.add('hide');                                                       // hides the start button
    displayquestions()
}
startButton.addEventListener('click', startQuiz);                                                      // once start button is clicked the quiz starts

var questionIndex = 0
// Function to display the codequizQuestions once the start button is clicked
function displayquestions() {
    choicesEl.innerHTML = "";                                                                       // done to retrieve whats inside the choices element in html
    var currentQuestion = codequizQuestions[questionIndex];                                        // variable for codequizquestions array with the index for the question title
    console.log(currentQuestion)                                                                  // to see the currentquestion in the console
    console.log(questionIndex)                                                                   // to see the question number in console
    questiontitle.textContent = currentQuestion.question                                        // this is to display the textcontent of each question
    for (let i = 0; i < currentQuestion.choices.length; i++) {                                 // set index variabe to 0, if index is less than the length of the questions in array then add 1 to loop to next question
        let choiceButton = document.createElement('button');                                  // to create the choice button for each question
        choiceButton.textContent = currentQuestion.choices[i]                                // the text content for each choice button = the current question title, all the choices & the index number of the choices
        choicesEl.appendChild(choiceButton)                                                 // adds a new child node to the existing parent node in html 


// audio for correct and incorrect sound when correct/incorrect answer is selected by user
var correctAudio = new Audio('./assets/sfx/correct.wav');
var incorrectAudio = new Audio('./assets/sfx/incorrect.wav');

// add event listener on choices buttons to
choiceButton.addEventListener("click", function(event){                                     // function waits for the choicebutton to be clicked(event) then responds to it
    console.log(event.target.textContent)                                                  // console log to see if eventlistener is working
    if(event.target.textContent === currentQuestion.correctanswer) {                      // if the button clicked is = to the correct answer, then the answer is correct
        alert("Correct")                                                                 // alert box pops up with corrrect if right answer is selected
        correctAudio.play();                                                            // plays correct audio if user enters correct answer
        console.log("correct")                                                         // checking the string is correct inside console log
        

        
    } else {
       console.log("incorrect");                                                       // consolelog incorrect if the button clicked is the wrong answer
       alert("incorrect")                                                             // alert box pops up showing incorrect if wrong answer selected
       incorrectAudio.play();                                                        // plays incorrect audio if user enters wrong answer
        secondscounter -= 5                                                         // deduct 5 seconds from timer if user clicks wrong answer
    }
    
    if(questionIndex < codequizQuestions.length - 1){                              // if the question index is less than the codequizquestions length -1 then keep going through the questions
        questionIndex++                                                           // this is to loop through each question (++ adds 1)
        displayquestions();                                                      // keep displaying the questions as you go through the loop
    } else {                                                                    // else if the above conditions are not met, execute the code below
            console.log('last question')                                       // when the last question is answered log in console
            endScreen.classList.remove("hide")                                // the hide class of the end screen is removed and the endscreen is displayed
            questions.style.display = "none"                                 // the questions screen is hidden
            score = secondscounter                                          // i want the score to be = to the time displayed when the test ends 
            finalscoreSpan.textContent = score                             // i want the textcontent of the finalscore to be the score
            secondscounter = 0                                            // secondscounter is emptied to 0
            timer.style.display = "none"                                 // hides the timer when endscreen is displayed
    }
       
});
    }   

}

// LOCAL STORAGE * LOCAL STORAGE * LOCAL STORAGE * LOCAL STORAGE * LOCAL STORAGE * LOCAL STORGAE


// function for the submitform when the submitButton is clicked an eventlistener goes off after the user inputs their initials, 
//it will take the new object with the intials from the new input, then it will be pushed to stored scores. Then it will be pushed to local storage.
function submitForm () {                                                          
    console.log(inputInitials.value);                                                                      // .value property used on an input(inputInitials) to get the value of the text input
    console.log(score)
    var newScores = {                                                                                     // when one user finishes the quiz we have a new score in this object
        inputInitials: inputInitials.value,                                                              // instead of hardcoding the initials e.g "EB" we change it to .value property to get the value of the text input
        score: score
    
    }
    
    storedhighScores.push(newScores)                                                                        // to add newscore to storedhighScores and push it to local storage: push is a method that adds an item to the end of an array
    localStorage.setItem("highscores", JSON.stringify(storedhighScores))                                  // when the page loads with the keyname of highScores we going to pass the array of objects in JSON.stringify
    console.log(storedhighScores)                                                                        // if we log storedhighScores we get all the scores stored & the new score that has been pushed to the array 
  
}
submitButton.addEventListener('click', submitForm) 
if (console.log("Initials submitted")) {

}

// The previous scores of all the users that have taken the test, each array is pushed to local storage
let totalScores = [{   
    inputInitials: "EB",                            
    score: 100
},
{
    inputInitials: "SK",
    score: 100}]

// When the page loads i want to get the data from from local storage, or set variable to an empty array
// When the user finishes the quiz i want to store their data by adding it to previous scores
if(JSON.parse(localStorage.getItem("highscores")) !== null){                                                      // if the highScores is not null
    console.log("Highscores not null");                                                                          // when its not null we will see the keyname of highScores and the Value in local storage/console
var storedhighScores = JSON.parse(localStorage.getItem("highscores"))                                           // then set the variable of storehighScores to be this value and save to local storage
}
else {
    console.log(" Highscores is Null")
    var storedhighScores = []                                                                                 // else if it is null we going to set it to an empty array
    var highscores = []
}





 




//console.log(storedhighScores[0].inputInitials);                                                 // if we log this we get the first initials in the array


























