// start button game
$(document).ready(function(){

$("#startBtn").on("click",function () {
    var timeRemaining = setInterval(function(){
        secondsleft--;
        document.getElementById("countdowntimer").textContent = secondsleft;
        if(secondsleft <= 0)
        endGame();
        },1000);
    });
    
});

var secondsleft = 15;
var correctAnswers = 0;
var wrongAnswers = 0;
var undefinedAnswers = 0;

function endGame(){
    //calculate correct answers
    if($("input[type=radio][name=question1]:checked").val() === 'correct'){
        correctAnswers++;
    }
    if($("input[type=radio][name=question2]:checked").val() === 'correct'){
        correctAnswers++;
    }
    if($("input[type=radio][name=question3]:checked").val() === 'correct'){
        correctAnswers++;
    }
    if($("input[type=radio][name=question4]:checked").val() === 'correct'){
        correctAnswers++;
    }
    if($("input[type=radio][name=question5]:checked").val() === 'correct'){
        correctAnswers++;
    }
    if($("input[type=radio][name=question6]:checked").val() === 'correct'){
        correctAnswers++;
    }

    //calculate wrong answers
    if($("input[type=radio][name=question1]:checked").val() === 'wrong'){
        wrongAnswers++;
    }
    if($("input[type=radio][name=question2]:checked").val() === 'wrong'){
        wrongAnswers++;
    }
    if($("input[type=radio][name=question3]:checked").val() === 'wrong'){
        wrongAnswers++;
    }
    if($("input[type=radio][name=question4]:checked").val() === 'wrong'){
        wrongAnswers++;
    }
    if($("input[type=radio][name=question5]:checked").val() === 'wrong'){
        wrongAnswers++;
    }
    if($("input[type=radio][name=question6]:checked").val() === 'wrong'){
        wrongAnswers++;
    }

    //  calculate undefined answers
    if($("input[type=radio][name=question1]:checked").val() === 'undefined'){
        undefinedAnswers++;
    }
    if($("input[type=radio][name=question2]:checked").val() === 'undefined'){
        undefinedAnswers++;
    }
    if($("input[type=radio][name=question3]:checked").val() === 'undefined'){
        undefinedAnswers++;
    }
    if($("input[type=radio][name=question4]:checked").val() === 'undefined'){
        undefinedAnswers++;
    }
    if($("input[type=radio][name=question5]:checked").val() === 'undefined'){
        undefinedAnswers++;
    }
    if($("input[type=radio][name=question6]:checked").val() === 'undefined'){
        undefinedAnswers++;
    }

    // display wrong and right answers
    document.getElementById("wrongAnswersCount").textContent = wrongAnswers;
    document.getElementById("correctAnswersCount").textContent = correctAnswers;

    // display undefined answers
    document.getElementById("undefinedAnswersCount").textContent = undefinedAnswers;


    //reset timer

    secondsleft = 15;
    clearInterval(timeRemaining);
}




