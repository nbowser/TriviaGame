/* first need to pseudo code the steps needing to take*/

// need some variables
$(document).ready(function(){
  
    // event listeners
    $("#remaining-time").hide();
    $("#start").on("click", trivia.startGame);
    $(document).on("click" , ".option", trivia.guessChecker);
    
  })
  
  var trivia = {
    // trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId : "",
    
    
    //Player wins/losses

/*
if (correct >= 6) {
    alert("Welcome to the real world!");
    images: pop up from pod
    end game

}

else if (counter = 0 && correctAnswers < 6 || wrongAnswers = 5) {
    alert("The body cannot live without the mind!");
    images: Apoc dropping to floor
    end game
}
*/
    // questions options and answers data
    questions: {
      q1: "When Morpheus offered Neo a choice to know what the 'Matrix' is, what pill did he take from Morpheus' hand?",
      q2: "Which Agent was more fixated on capturing Morpheus than the rest?",
      q3: "What pod born crew member was considered to be the 'Judas' of the bunch?",
      q4: "What was the name of the operator on the ship?",
      q5: "What is the underlining issue about the path people are on either in the 'Real World' or the Matrix?",
      q6: "What is the name of the hovercraft Morpheus captains?",
      q7: "What was the Oracle making when Neo came to visit her?",
      q8: "What is the food Dozer calls the 'breakfast of champions'?",
      q9: "What does Agent Smith find most repolsive about the Matrix?",
      q10: "What song is playing in Neo's headphones right before Trinity contacts him on his computer?"
    },
    options: {
      q1: ["Red", "Blue", "Green", "Yellow"],
      q2: ["Agent Brown", "Agent Orange", "Agent Smith", "Agent Jones"],
      q3: ["Switch", "Apoc", "Mouse", "Cypher"],
      q4: ["Dozer", "Razor", "Blade", "Tank"],
      q5: ["Choice", "Control", "Destiny", "Reality"],
      q6: ["Shadrach", "Bonaparte", "Belshazzar", "Nebuchadnezzar", "Ramses"],
      q7: ["Apple Pie", "Candy", "Cookies", "Baklava", "Bread"],
      q8: ["Goop", "Tasty Wheat", "Chicken", "Tuna Fish"],
      q9: ["It never changes", "People being too oblivious", "Having to spend time with humans", "The smell"],
      q10: ["Wake Up by Rage Against the Machine", "Dissolved Girl by Massive Attack", "Mindfields by The Prodigy", "Sleeping Awake by P.O.D."]
    },
    answers: {
      q1: "Red",
      q2: "Agent Smith",
      q3: "Cypher",
      q4: "Tank",
      q5: "Choice",
      q6: "Nebuchadnezzar",
      q7: "Cookies",
      q8: "Goop",
      q9: "The smell",
      q10: "Dissolved Girl by Massive Attack"
    },
    // trivia methods
    // method to initialize game
    startGame: function(){
      // restarting game results
      trivia.currentSet = 0;
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.unanswered = 0;
      clearInterval(trivia.timerId);
      
      // show game section
      $("#game").show();
      
      //  empty last results
      $("#results").html("");
      
      // show timer
      $("#timer").text(trivia.timer);
      
      // remove start button
      $("#start").hide();
  
      $("#remaining-time").show();
      
      // ask first question
      trivia.nextQuestion();
      
    },
    // method to loop through and display questions and options 
    nextQuestion : function(){
      
      // set timer-seconds each question
      trivia.timer = 12;
       $("#timer").removeClass("last-seconds");
      $("#timer").text(trivia.timer);
      
      // to prevent timer speed up
      if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
      }
      
      // gets all the questions then indexes the current questions
      var questionContent = Object.values(trivia.questions)[trivia.currentSet];
      $("#question").text(questionContent);
      
      // an array of all the user options for the current question
      var questionOptions = Object.values(trivia.options)[trivia.currentSet];
      
      // creates all the trivia guess options in the html
      $.each(questionOptions, function(index, key){
        $("#options").append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
      })
      
    },
    // method to decrement counter and count unanswered if timer runs out
    timerRunning : function(){
      // if timer still has time left and there are still questions left to ask
      if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
        $("#timer").text(trivia.timer);
        trivia.timer--;
          if(trivia.timer === 4){
            $("#timer").addClass("last-seconds");
          }
      }
      // the time has run out and increment unanswered, run result
      else if(trivia.timer === -1){
        trivia.unanswered++;
        trivia.result = false;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 3000);
        $("#results").html("<h3>The body cannot live without the mind!" + "<br>" + Object.values(trivia.answers)[trivia.currentSet] +"</h3>");
      }
      // if all the questions have been shown end the game, show results
      else if(trivia.currentSet === Object.keys(trivia.questions).length){
        
        // adds results of game (correct, incorrect, unanswered) to the page
        $("#results")
          .html("<h3>Welcome to the desert of the real!</h3>"+
          "<p>Correct: " + trivia.correct + "</p>" +
          "<p>Incorrect: " + trivia.incorrect + "</p>" +
          "<p>Unaswered: " + trivia.unanswered +"</p>" +
          "<p>Play again?</p>");
        
        // hide game sction
        $("#game").hide();
        
        // show start button to begin a new game
        $("#start").show();
      }
      
    },
    // method to evaluate the option clicked
    guessChecker : function() {
      
      // timer ID for gameResult setTimeout
      var resultId;
      
      // the answer to the current question being asked
      var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
      
      // if the text of the option picked matches the answer of the current question, increment correct
      if($(this).text() === currentAnswer){
        // turn button green for correct
        $(this).addClass("btn-success").removeClass("btn-info");
        
        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 3500);
        $("#results").html("<h3>Good your beginning to believe!</h3>");
      }
      // else the user picked the wrong option, increment incorrect
      else{
        // turn button clicked red for incorrect
        $(this).addClass("btn-danger").removeClass("btn-info");
        
        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 5000);
        $("#results").html("<h3>The answer is out there, it's looking for you, and it will find you if you want it to!" + "<br>" + currentAnswer +"</h3>");
      }
      
    },
    // method to remove previous question results and options
    guessResult : function(){
      
      // increment to next question set
      trivia.currentSet++;
      
      // remove the options and results
      $(".option").remove();
      $("#results h3").remove();
      
      // begin next question
      trivia.nextQuestion();
       
    }
  
  }

  // A reset Answer counter, clock, and to randomize questions.

/* $(":reset") {
    game
    counter = 30;
    correctAnswers = 0;
    wrongAnswers = 0
}
-----------------------------------------------
OR
function updatequiz-area() {
    my
}
*/