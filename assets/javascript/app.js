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



      
    
    
  var questions = [
    {         
            question: "How many feet is it to the very top (the tip) of the Eiffel Tower?",
            choices: ["1,063", "984", "1,000", "500"],
            answer: 0,
    },
    {
            question: "Traveling on the equator, how many miles is it to go around the world?",
            choices: ["32,863", "1200", "24,901", "19,332"],
            answer: 2,
    },
    {
            question: "How many colors are there in the world?",
            choices: ["500", "36,472,432", "52,000", "10,000,000"],
            answer: 3,

    },
    {
            question: "How deep is the deepest lake in the U.S.?",
            choices: ["1,290", "1,949", "1,000", "5,083"],
            answer: 1,
    }];

    var counter = 5;
    
    var correctAnswer;
    var running = false;
    countDown;
    var emptyArray;
    messages = {

    };
    




    $("#reset").hide();
    $("#startButton").on('click', function(){
                $("#startButton").hide();
                runCounter();
                displayQuestion();
                for(var i =0; i < questions.lenght; i++);
                emptyArray.push(questions[i]);

    })
    function runCounter(){
            if(!running) {
              countDown = setInterval(decrement, 1000);
              running = true;
              if(counter === 0){
              stop();
            }
              console.log(counter)
            }
    
    function decrement(){
      $("#countDown").html("<h2> Time Remaining:" + counter + "<h2>");
      counter--;
    }
  }   
  
  function stop() {
    running = false;
    clearInterval(countDown);

  } 

  function displayQuestion() {
    $("#firstQestText").html("<h2>" + questions + question [0] + "</h2>")
    console.log(questions.length)

  }

  



});
