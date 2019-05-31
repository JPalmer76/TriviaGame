$(document).ready(function() {
  console.log("ready");
  // create questions array---3 arrays?
  // create a timer function
  // start timer on click of startGame button
  // make time display on screen
  // hide button when game starts

  // create random answers array with correct answer as well--2 different arrays?
  // display 3 random questions---3 functions?
  // push answers selected to empty array
  // check answers after time runs out
  // display results and play again button

  var questionList = [
    {
      questionText:
        "How many feet is it to the very top (the tip) of the Eiffel Tower?",
        answerChoices: ["1,063", "984", "1,000", "500"],
        correctAnswer: "1,063"
    },
    {
      questionText:
        "Traveling on the equator, how many miles is it to go around the world?",
        answerChoices: ["32,863", "1200", "24,901", "19,332"],
        correctAnswer: "24,901"
    },
    {
      questionText: "How many colors are there in the world?",
      answerChoices: ["500", "36,472,432", "52,000", "10,000,000"],
      correctAnswer: "10,000,000"
    },
    {
      questionText: "How deep is the deepest lake in the U.S.?",
      answerChoices: ["1,290", "1,949", "1,000", "5,083", "6,789"],
      correctAnswer: "1,949"
    },
    {
      questionText: "Which of the following is NOT a cookie?",
      answerChoices: ["Oreo", "Chips Ahoy", "Nutter Butter", "Fig Newton"],
      correctAnswer: "Fig Newton"
    },
    {
      questionText: "What year was the first quarter produced?",
      answerChoices: ["1790", "1796", "1000bc", "1982"],
      correctAnswer: "1796"
    },
    {
      questionText: "How heavy is a kilogram in pounds?",
      answerChoices: ["2.20462", "33.8962", "2.10", "2.42902", "3"],
      correctAnswer: "2.20462"
    }
    
  ];
  var userChoice = [];
  // var c_Answer = 0;
  // var corChoices = questionList[correctAnswer];
  var counter = 3;
  var running = false;
  var countDown;
  

  $("#reset").hide();

  $("#startButton").on("click", function() {
    $("#startButton").hide();
    runCounter();
    displayQuestionsAndAnswerChoices();
  });

  $("#questions").on("click", ".guess", function () {
    var userSelected = $(this).attr("data-value");
    console.log(userSelected);
    userChoice.push(userSelected);
    // console.log(userChoice);
    // push answer to guess array
  });

  function runCounter() {
    if (!running) {
      countDown = setInterval(decrement, 1000);
      running = true;
      console.log(counter);
    }
  }

  function decrement() {
    counter--;
    $("#countDown").html("<h2> Time Remaining:" + counter + "<h2>");
    if (counter === 0) {
      stop();
      alert("Time's UP!!");
      checkAnswers();
      $("#reset").show();
    }
  }

  function checkAnswers() {
    var correctAnswers = []
    for(i = 0; i < questionList.length; i++){
      correctAnswers.push(questionList[i].correctAnswer)
    }
    var score = 0;
    for(j = 0; j < userChoice.length; j++) {
      
      if(correctAnswers.includes(userChoice[j])) {
        score++;

      }
    }
    
   console.log(correctAnswers)
   console.log(userChoice)
   alert(score)
      // check answers in guessArray[i] against answers in qustionList[i].correctAnswer
      // keep track of how many are wrong and how many are right
  }

  function stop() {
    running = false;
    clearInterval(countDown);
    checkAnswers()
  }

  function displayQuestionText(questionText) {
    var questionDiv = '<div class="question-content">';
    var questionContent = '<h2>' + questionText + '</h2>';
    $('#questions').append(questionDiv, questionContent);
  }

  function displayChoice(choiceText, radioButtonName) {
    
    var choiceDiv = $('<div class="form-check form-check-inline choiceDiv">');
    var radioButton = $('<input style="in-line-block" class="form-check-input guess" type="radio" name="' + radioButtonName + '" data-value=' + choiceText + '>');
    var choiceLabel = $('<label id="answer1" class="form-check-label" for="inlineRadio1">' + choiceText + '</label>');
    choiceDiv.append(radioButton);
    choiceDiv.append(choiceLabel);
    // var closeDiv = '</div>';
    $('#questions').append(choiceDiv);
    
  }
  

  function dislpayAnswerChoices(answerChoices, questionId) {
    for (j = 0; j < answerChoices.length; j++) {
      displayChoice(answerChoices[j], questionId);
    }
  }

  function displayQuestionsAndAnswerChoices() {
      for(i = 0; i < questionList.length; i++) {
        displayQuestionText(questionList[i].questionText);
        dislpayAnswerChoices(questionList[i].answerChoices, i);
        $('#questions').append('</div>');
      }
  }
// reset game ---- not working
  $("#reset").on("click", function() {
    $("#reset").hide();
    $(choiceText).empty();
    $("#questions").empty();
    var userSelected = $(this).attr("data-value");
    console.log(userSelected);
    userChoice.push(userSelected);
    
    runCounter();
    displayQuestionsAndAnswerChoices();
  
  })
  
});
