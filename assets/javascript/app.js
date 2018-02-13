//create arrays for questions and answers
// create a start button at the start of the game before questions pop up
//create time remaining variable that decreases while person is answering questions
//if person answers a question correctly, alert("good job")
//if person answers a question wrong, alert('nope') and tell person correct answer
//set a delay while person is reading correct answer 4 seconds
//show website icon when person answers question
//create start over button to reset the page DO NOT RELOAD PAGE
//display correct answers, incorrect answers, and unanswered questions at the end

var triviaQuest = ["What social media website was created by Mark Zuckerberg and used for maintaining connections between friends and family?",
    "What is the world's most popular search engine?",
    "What is a well known professional-networking website?",
    "What networking website is known for allowing users to organize events to bring like-minded people together, both professionally and personally?"
]

var triviaAnswer = [
    triviaAnswer[0] = ['Facebook', 'Tumblr', 'Baidu', 'Snapchat'],
    triviaAnswer[1] = ['Bing', 'Yahoo', 'DuckDuckGo', 'Google'],
    triviaAnswer[2] = ['Indeed', 'Dice', 'LinkedIn', 'MeetUp'],
    triviaAnswer[3] = ['LinkedIn', 'Facebook', 'Twylah', 'Meetups']
]

var icon = ['../images/facebookicon.png', '../images/googleicon.png', '../images/linkedinicon.png', '../images/meetupicon.png'
]

var correctAnswers = 0;
var inccorectAnswers = 0;
var unanswered = 0;

$("#startButton").click(function () {
    startGame();
});

function startGame() {
    for (i = 0; i < triviaQuest.length; i++) {
        // is this correct use of a time out? in a for loop?
        setTimeout(function () {
            i++
        }, 30000);
        //if user answers question correctly, update #results(should there be a separate ID for end results?) with you are correct and 
        if () {
            //show icon
            $("#pictures").html('<img src="assets/images/' + icon[i] + '" />');
            //increase correctAnswers by 1
            correctAnswers++;
        }
        //else, update #results with "nope, the correct answer was: " and show icon
        else {
            $("#pictures").html('<img src="assets/images/' + icon[i] + '" />');
            //increase incorrectAnswers by 1
            incorrectAnswers++;
        }

        //do I need an else/if?

        //add a delay between questions/answers (HOW DO I USE DELAY IN THIS INSTANCE) or is setTimeout better?
    }
    $("#resetButton").click(function () {
        startGame();
    });
}

