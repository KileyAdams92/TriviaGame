// create a start button at the start of the game before questions pop up
//create time remaining variable that decreases while person is answering questions

//create start over button to reset the page DO NOT RELOAD PAGE
var state = {
  questions: [
    {
      question:
        "What social media website was created by Mark Zuckerberg and used for maintaining connections between friends and family?",
      choices: ["Facebook", "Tumblr", "Baidu", "Snapchat"],
      correctAnswer: "Facebook",
      image: "assets/images/facebookicon.png"
    },
    {
      question: "What is the world's most popular search engine?",
      choices: ["Bing", "Yahoo", "DuckDuckGo", "Google"],
      correctAnswer: "Google",
      image: "assets/images/googleicon.png"
    },
    {
      question: "What is a well known professional-networking website?",
      choices: ["Indeed", "Dice", "LinkedIn", "Meetup"],
      correctAnswer: "LinkedIn",
      image: "assets/images/linkedinicon.png"
    },
    {
      question:
        "What networking website is known for allowing users to organize events to bring like-minded people together, both professionally and personally?",
      choices: ["LinkedIn", "Facebook", "Twylah", "Meetups"],
      correctAnswer: "Meetups",
      image: "assets/images/meetupicon.png"
    }
  ],
  currentQuestion: 0,
  defaultTime: 10, //TODO: set to 30 before I turn it
  answeredWrong: 0,
  answeredRight: 0,
  unanswered: 0
};

function generateQuestions() {
  startTimer();
  var currentQuestion = state.questions[state.currentQuestion];
  $("#question").html(currentQuestion.question);
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    $("#choices").append(
      "<button class='choice' value=" +
        currentQuestion.choices[i] +
        ">" +
        currentQuestion.choices[i] +
        "</button>"
    );
  }
}
//when startButton is clicked:
$("#startButton").click(function() {
  generateQuestions();
  $("#startButton").hide();
});

function onTimerTick() {
  var currentQuestion = state.questions[state.currentQuestion];
  // Every second while the timer is running do the following:
  currentQuestion.timeTracker--;
  $("#timer").html(currentQuestion.timeTracker);
  console.log(currentQuestion.timeTracker);

  if (currentQuestion.timeTracker === 0) {
    console.log(
      "time left is 0, showing message and going to next question 5 seconds"
    );
    clearInterval(currentQuestion.timerId);
    $("#question").html(
      "<h1>" +
        "Time's up, but the correct answer was actually " +
        currentQuestion.correctAnswer +
        "</h1>"
    );
    $("#pictures").html("<img src='" + currentQuestion.image + "'/>");

    setTimeout(function() {
      console.log("moving on to the next question");
      nextQuestion();
    }, 5000);
    // alert("Times up, next question!");
    state.unanswered++;
  }
}

function startTimer() {
  $("#timer").html(state.defaultTime);
  state.questions[state.currentQuestion].timeTracker = state.defaultTime;
  state.questions[state.currentQuestion].timerId = setInterval(
    onTimerTick,
    1000
  );
  console.log(state.questions[state.currentQuestion].timerId);
}

function nextQuestion() {
  clearInterval(state.questions[state.currentQuestion].timerId);
  state.currentQuestion++;
  $("#choices").html("");
  $("#pictures").html("");
  var hasMoreQuestions = state.currentQuestion < state.questions.length;
  if (hasMoreQuestions) {
    generateQuestions();
  } else {
    generateResults();
  }
}

function generateResults() {
  // var currentQuestion = state.questions[state.currentQuestion];
  $("#results").html(
    " Amount Correct : " +
      state.answeredRight +
      "<br />" +
      "Amount Wrong : " +
      state.answeredWrong +
      "<br />" +
      "Amount Unanswered : " +
      state.unanswered
  );
  $("#question").hide();
  $("#timer").hide();
}
$(document).on("click", ".choice", function() {
  var currentQuestion = state.questions[state.currentQuestion];
  var value = $(this).attr("value");
  var isCorrectAnswer = value === currentQuestion.correctAnswer;
  clearInterval(currentQuestion.timerId);
  if (isCorrectAnswer) {
    // alert("It's correct!");
    $("#question").html(
      "<h1>" +
        "Great job,  the correct answer is " +
        currentQuestion.correctAnswer +
        "</h1>"
    );
    state.answeredRight++;
  } else {
    // alert("Wrong, next question");
    $("#question").html(
      "<h1>" +
        "Nice try, but the correct answer was actually " +
        currentQuestion.correctAnswer +
        "</h1>"
    );
    state.answeredWrong++;
  }
  $("#pictures").html("<img src='" + currentQuestion.image + "'/>");
  var timeOut = setTimeout(function() {
    nextQuestion();
  }, 5000);
});

//after second question it doesn't move to the next
//generate results not working
//
