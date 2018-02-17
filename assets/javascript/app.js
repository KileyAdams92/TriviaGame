// create a start button at the start of the game before questions pop up
//create time remaining variable that decreases while person is answering questions

//create start over button to reset the page DO NOT RELOAD PAGE
var state = {
  questions: [
    {
      question:
        "What social media website was created by Mark Zuckerberg and used for maintaining connections between friends and family?",
      choices: ["Facebook", "Tumblr", "Baidu", "Snapchat"],
      correctAnswer: "Facebook"
    },
    {
      question: "What is the world's most popular search engine?",
      choices: ["Bing", "Yahoo", "DuckDuckGo", "Google"],
      correctAnswer: "Google"
    },
    {
      question: "What is a well known professional-networking website?",
      choices: ["Indeed", "Dice", "LinkedIn", "Meetup"],
      correctAnswer: "LinkedIn"
    },
    {
      question:
        "What networking website is known for allowing users to organize events to bring like-minded people together, both professionally and personally?",
      choices: ["LinkedIn", "Facebook", "Twylah", "Meetups"],
      correctAnswer: "Meetups"
    }
  ],
  currentQuestion: 0,
  defaultTime: 5, //TODO: set to 30 before I turn it
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
  // Every second while the timer is running do the following:
  state.questions[state.currentQuestion].timeTracker--;
  $("#timer").html(state.questions[state.currentQuestion].timeTracker);
  console.log(state.questions[state.currentQuestion].timeTracker);

  if (state.questions[state.currentQuestion].timeTracker === 0) {
    $("#question").html("Nice Try, but the correct answer was");
    alert("Times up, next question!");
    state.unanswered++;

    nextQuestion();
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

function clearTimer(timerId) {
  clearInterval(timerId);
}
function nextQuestion() {
  clearTimer(state.questions[state.currentQuestion].timerId);
  state.currentQuestion++;
  $("#choices").html("");
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
  var value = $(this).attr("value");
  var isCorrectAnswer =
    value === state.questions[state.currentQuestion].correctAnswer;

  if (isCorrectAnswer) {
    alert("It's correct!");
    state.answeredRight++;
  } else {
    alert("Wrong, next question");
    state.answeredWrong++;
  }
  nextQuestion();
});

//after second question it doesn't move to the next
//generate results not working
//
