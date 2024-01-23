var userScore = document.getElementById("highscores")

if(JSON.parse(localStorage.getItem("highscores")) !== null){                                                      // if the highScores is not null
    console.log("Highscores not null");                                                                          // when its not null we will see the keyname of highScores and the Value in local storage/console
var storedhighScores = JSON.parse(localStorage.getItem("highscores"))                                           // then set the variable of storehighScores to be this value and save to local storage
}
else {
    console.log(" Highscores is Null")
    var storedhighScores = []                                                                                 // else if it is null we going to set it to an empty array
    var highscores = []
}

function displayscores () {
    //highScores.textContent = JSON.stringify(storedhighScores)
    //highScores.append(JSON.stringify(storedhighScores))
    
    //loop through the array length of storedhighScores, then for each item add plus 1 object,
    //so in the console you will see each of the individual objects
    for (let i = 0; i < storedhighScores.length; i++) {
    console.log(storedhighScores[i]);
    
    // 1. create an element; we creating a div element for each single score
    var eachScore = document.createElement("div")                                                   
    // 2. attach styling/attribute; we setting the text content to the initials being inout
    eachScore.textContent = storedhighScores[i].inputInitials + " " + storedhighScores[i].score        
    // 3. we appending each single score to each dive element
    userScore.append(eachScore);                                        
    }
    }
    displayscores()







