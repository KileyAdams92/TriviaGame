// create a start button at the start of the game before questions pop up
//create time remaining variable that decreases while person is answering questions


//create start over button to reset the page DO NOT RELOAD PAGE
var state = {
    questions: [
        {
            question: "What social media website was created by Mark Zuckerberg and used for maintaining connections between friends and family?",
            choices: [
                "Facebook", 
                "Tumblr", 
                "Baidu",
                "Snapchat"
            ],
            correctAnswer: "Facebook"
        },
        {
            question: "What is the world's most popular search engine?",
            choices: [
                "Bing", 
                "Yahoo", 
                "DuckDuckGo",
                "Google"
            ],
            correctAnswer: "Google"
        },
        {
            question: "What is a well known professional-networking website?",
            choices: [
                "Indeed", 
                "Dice", 
                "LinkedIn",
                "Meetup"
            ],
            correctAnswer: "LinkedIn"
        },
        {
            question:  "What networking website is known for allowing users to organize events to bring like-minded people together, both professionally and personally?",
            choices: [
                "LinkedIn", 
                "Facebook", 
                "Twylah",
                "Meetups"
            ],
            correctAnswer: "Meetups"
        },
    ],
    currentQuestion: 0,
    timer: 30,
    answeredWrong: 0,
    answeredRight: 0,
    unanswered: 0
}
function generateQuestions() {
    startTimer();
    var currentQuestion = state.questions[state.currentQuestion];
    $("#question").html(currentQuestion.question);
    for (var i=0; i < currentQuestion.choices.length;i++) {
        $("#choices").append("<button class='choice' value="+ currentQuestion.choices[i]  + ">"+ currentQuestion.choices[i] + "</button>")
    }
}
//when startButton is clicked:
$("#startButton").click(function () {
    generateQuestions();
});

function startTimer() {
    var timer = setInterval(function() {
        $("#timer").html(state.timer);
        console.log(state.timer)
        state.timer--
        if (state.timer <= 0) {
            clearInterval(timer);
            alert("Times up, next question!")
            nextQuestion();
        }
    }, 1000)
}
function nextQuestion() {
    state.currentQuestion++
}
$(document).on("click",".choice", function() {
    var value = $(this).attr("value");
    if (value === state.questions[state.currentQuestion].correctAnswer) {
        alert("It's correct!")
        state.currentQuestion++;
        $("#choices").html("");
        generateQuestions();
    } else {
        alert("Wrong, next question")
        state.currentQuestion++;
        $("#choices").html("");
        generateQuestions();
    }
    if (state.currentQuestion < state.currentQuestion.length) {
        generateQuestions();
    
}

function generateResults() {
    var currentQuestion = state.questions[state.currentQuestion];
    $("#results").text(" Amount Correct : " + answeredRight + "</br>" + "Amount Wrong : " + answeredWrong + "</br>" + "Amount Unanswered : " + unanswered);
}


generateQuestions();



