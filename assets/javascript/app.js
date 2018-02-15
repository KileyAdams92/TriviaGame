// create a start button at the start of the game before questions pop up
//create time remaining variable that decreases while person is answering questions

//set a delay while person is reading correct answer 4 seconds
//show website icon when person answers question
//create start over button to reset the page DO NOT RELOAD PAGE
//display correct answers, incorrect answers, and unanswered questions at the end

//creating the object for all of the data to go into, including all of the requirements for the game
var createObject = function (question, answer, choice1, choice2, choice3, choice4) {
    var createO = {
        q: question,
        answ: answer,
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        rightChoice: right,
        youWin: correct,
        youLost: wrong,
        img: src,
    };
    //returning the variable for when the createObject function is called
    return createO;
};
//creating an empty array to hold the information being sent to the createObject object
var objectFluff = [];

//information being added to empty array the coincides with createObject properties/values
objectFluff.push(createObject(
    "What social media website was created by Mark Zuckerberg and used for maintaining connections between friends and family?",
    "'Facebook', 'Tumblr', 'Baidu', 'Snapchat'",
    "1",
    "2",
    "3",
    "4",
    "1",
    "Congratulations, you were right! Mark Zuckerberg did create Facebook!",
    "Ouch, wrong choice. Mark Zuckerberg actually created Facebook!",
    "../images/facebookicon.png"
))

objectFluff.push(createObject(
    "What is the world's most popular search engine?",
    "'Bing', 'Yahoo', 'DuckDuckGo', 'Google'",
    "1",
    "2",
    "3",
    "4",
    "4",
    "Hey - nice job! Google is the most well known and utilized search engine!",
    "Better luck next time, Google is actually the correct answer.",
    "../images/googleicon.png"
))

objectFluff.push(createObject(
    "What is a well known professional-networking website?",
    "'Indeed', 'Dice', 'LinkedIn', 'Meetup'",
    "1",
    "2",
    "3",
    "4",
    "3",
    "Great choice! LinkedIn is very popular for professional networking, supporting colleages, and finding jobs!",
    "Good attempt, however the correct answer was LinkedIn.",
    "../images/linkedinicon.png"
))

objectFluff.push(createObject(
    "What networking website is known for allowing users to organize events to bring like-minded people together, both professionally and personally?",
    "'LinkedIn', 'Facebook', 'Twylah', 'Meetups'",
    "1",
    "2",
    "3",
    "4",
    "4",
    "High-five! Meetups is a super awesome website known for allowing people to create get-togethers for people who share the same hobbies and interests!",
    "Solid effort! The correct answer was actually Meetups though.",
    "../images/meetupicon.png"
))

//when startButton is clicked:
$("#startButton").click(function () {
    startGame();
});

function startGame() {
    //timer section
    //variables
    var timeRemaining = 30;
    var correctAnswers = 0;
    var inccorectAnswers = 0;
    var unanswered = 0;
    var userGuess = 0;

    var interval = setInterval(decrement, 1000);

    function go() {
        timeRemaining--;
        $("timeRemain").html("<h1>Time will run out in: " + timeRemaining + " seconds</h2>");
        if (timeRemaining === 0){
            //move on to the next slide
        }
    }



    for (i = 0; i < 5; i++) {
        $("#qAndA").append(createObject());
        // is this correct use of a time out? in a for loop?



        //add a delay between questions/answers (HOW DO I USE DELAY IN THIS INSTANCE) or is setTimeout better?
    }
    $("#resetButton").click(function () {
        startGame();
    });
}

