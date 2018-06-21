/* first need to pseudo code the steps needing to take*/

// need some variables



// some css style to make this look good

// Variables
var counter = 30;

// Click commands
$(document).on('click', '#start-over', function(e) {
    game.rest();
});

$(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
});

$(document).on('click', '#start', function(e) {
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number"></span> Seconds</h2');
    game.loadQuestion();
});

// Question Array/object
var questions = [ {
    
    question: "When Morpheus offered Neo a choice to know what the 'Matrix' is, what pill did he take from Morpheus' hand?",
    answers: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Red",
    images: ""
}, {
    question: "Which Agent was more fixated on capturing Morpheus than the rest?",
    answers: ["Agent Brown", "Agent Orange", "Agent Smith", "Agent Jones"],
    correctAnswer: "Agent Smith",
    images: ""
}, {
    question: "What pod born crew member was considered to be the 'Judas' of the bunch?",
    answers: ["Trinity", "Switch", "Apoc", "Mouse", "Cypher"],
    correctAnswer: "Cypher",
    images: ""
}, {
    question: "What was the name of the operator on the ship?",
    answers: ["Dozer", "Blade", "Tank", "Gunner"],
    correctAnswer: "Tank",
    images: ""
}, {    
    question: "What is the underlining issue about the path people are on either in the 'Real World' or the Matrix?",
    answers: ["Choice", "Control", "Destiny", "Reality"],
    correctAnswer: "Choice",
    images: ""
}, {
    question: "What is the name of the hovercraft Morpheus captains?",
    answers: ["Shadrach", "Bonaparte", "Belshazzar", "Nebuchadnezzar", "Ramses"],
    correctAnswer: "Nebuchadnezzar",
    images: ""
}, {
    question: "What was the 'Oracle' making when Neo came to visit her?",
    answers: ["Apple Pie", "Candy", "Cookies", "Baklava", "Bread"],
    correctAnswer: "Cookies",
    images: ""
}, {  
    question: "What is the food Dozer calls the 'breakfast of champions'?",
    answers: ["Goop", "Tasty Wheat", "Chicken", "Tuna Fish"],
    correctAnswer: "Goop",
    images: ""
}, {
    question: "What does Agent Smith find most repolsive about the Matrix?",
    answers: ["It never changes", "People being too oblivious", "Having to spend time with humans", "The smell"],
    correctAnswer: "The smell",
    images: ""
}, {
    question: "What song is playing in Neo's headphones right before Trinity contacts him on his computer?",
    answers: ["Wake Up by Rage Against the Machine", "Dissolved Girl by Massive Attack", "Mindfields by The Prodigy", "Sleeping Awake by P.O.D."],
    correctAnswer: "Dissolved Girl by Massive Attack",
    images: ""
}],


// Functions
var game = guestions[Math.floor(Math.random() * questions.length)];




// Need a way to insert questions and choises into game and randomize them



for (var i = 0; i < questions.length; i++) {
    for (var j = 0; j < answers.length; j++) {
        
    }
}


// Need a way validate/log player choices
if (correctAnswer === true) {
    //add 1 point to correctAnswer score;
}

else  {
    //add 1 point to wrongAnswer score; 
};

// Display questions and be able to select answer




// Need a way to count down timer for game 

// refer to timeout.html exercise
$('#start').on("click", (function() {
    counter = setTimeout(function() {

    }, 30000);
});



// Need a method to keep score of right/wrong answers
var correctAnswers = 0;
var  wrongAnswers= 0;


//Player wins/losses

/*
if (correctAnswer >= 6) {
    alert("Welcome to the real world!");
    images: pop up from pod
}

else if (counter = 0 && correctAnswers < 6 || wrongAnswers >= 5) {
    alert("The body cannot live without the mind!");
    images: Apoc dropping to floor
}
*/




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