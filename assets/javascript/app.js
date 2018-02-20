var state = {
  questions: [
    {
      question:
        "What social media website was created by Mark Zuckerberg and used for maintaining connections between friends and family?",
      choices: ["Facebook", "Tumblr", "Baidu", "Snapchat"],
      correctAnswer: "Facebook",
      image: "assets/images/giphy/facebookgif.gif"
    },
    {
      question: "What is the world's most popular search engine?",
      choices: ["Bing", "Yahoo", "DuckDuckGo", "Google"],
      correctAnswer: "Google",
      image: "assets/images/giphy/googlegif.gif"
    },
    {
      question: "What is a well known professional-networking website?",
      choices: ["Indeed", "Dice", "LinkedIn", "Meetup"],
      correctAnswer: "LinkedIn",
      image: "assets/images/giphy/linkedin.gif"
    },
    {
      question:
        "What networking website is known for allowing users to organize events to bring like-minded people together, both professionally and personally?",
      choices: ["LinkedIn", "Facebook", "Twylah", "Meetups"],
      correctAnswer: "Meetups",
      image: "assets/images/giphy/meetupsgif.gif"
    }
  ],
  currentQuestion: 0,
  defaultTime: 10,
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

//unable to get reset button to reset page, will revisit
$("#resetButton").click(function() {
  generateQuestions();
  onTimerTick();
  $("#resetButton").hide();
});

function onTimerTick() {
  var currentQuestion = state.questions[state.currentQuestion];
  // Every second while the timer is running do the following:

  $("#timer").html("Time Remaining : " + currentQuestion.timeTracker);
  currentQuestion.timeTracker--;
  if (currentQuestion.timeTracker === 0) {
    clearInterval(currentQuestion.timerId);
    $("#choices").hide();
    $("#question").html(
      "<h1>" +
        "Time's up, but the correct answer was actually " +
        currentQuestion.correctAnswer +
        "</h1>"
    );
    $("#pictures").html("<img src='" + currentQuestion.image + "'/>");

    setTimeout(function() {
      nextQuestion();
    }, 5000);
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
}

function nextQuestion() {
  clearInterval(state.questions[state.currentQuestion].timerId);
  state.currentQuestion++;
  $("#choices").show();
  $("#choices").html("");
  $("#pictures").html("");
  var hasMoreQuestions = state.currentQuestion < state.questions.length;
  if (hasMoreQuestions) {
    generateQuestions();
  } else {
    generateResults();
  }
}
//results page information
function generateResults() {
  $("#resetButton").show();
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

$(document).ready(function() {
  $("#resetButton").hide();
});
//when a click occurs on the document,
$(document).on("click", ".choice", function() {
  var currentQuestion = state.questions[state.currentQuestion];
  var value = $(this).attr("value");
  var isCorrectAnswer = value === currentQuestion.correctAnswer;
  clearInterval(currentQuestion.timerId);
  //when one of the answer buttons is clicked,
  $(".choice").on("click", function() {
    $(this).prop("disabled", true);
  });
  if (isCorrectAnswer) {
    $("#question").html(
      "<h1>" +
        "Great job,  the correct answer is " +
        currentQuestion.correctAnswer +
        "</h1>"
    );
    $("#choices").hide();
    state.answeredRight++;
  } else {
    $("#question").html(
      "<h1>" +
        "Nice try, but the correct answer was actually " +
        currentQuestion.correctAnswer +
        "</h1>"
    );
    $("#choices").hide();
    state.answeredWrong++;
  }
  $("#pictures").html("<img src='" + currentQuestion.image + "'/>");
  var timeOut = setTimeout(function() {
    nextQuestion();
  }, 5000);
});
