var bgnQuiz = document.querySelector("#btn")
var quizArea = document.getElementById("quizarea")
var question = document.getElementById("question")
var button1 = document.getElementById("opt1")
var button2 = document.getElementById("opt2")
var button3 = document.getElementById("opt3")
var button4 = document.getElementById("opt4")
var result = document.getElementById("right-wrong")
var score = document.getElementById("score")
var currentQuestion = 0
var grade = 0

quizArea.style.display = "none"
var timer = 120;
var timerObject;
var counter = document.getElementById("counter")

var startBtnHandler = function () {
    bgnQuiz.style.display = "none"
    quizArea.style.display = "block"
    timerObject = setInterval(function () {
        counter.textContent = "Time Left: " + timer + "s"
        
        if(timer > 1) {
            timer--;
        }else {
            clearInterval(timerObject)
        }
    },1000)

    displayQuestion();
};




var questionlist = [ 
    {
        q:"What does JS stand for?",
        c:["Junior-Senior","JavaScript","JanSport","JinSeng"],
        a:2
    },
    {
        q:"What does JS stand for?",
        c:["Junior-Senior","JavaScript","JanSport","JinSeng"],
        a:2
    },
    {
        q:"What does JS stand for?",
        c:["Junior-Senior","JavaScript","JanSport","JinSeng"],
        a:2
    }, {
        q:"What does JS stand for?",
        c:["Junior-Senior","JavaScript","JanSport","JinSeng"],
        a:2
    },
    {
        q:"What does JS stand for - last?",
        c:["Junior-Senior","JavaScript","JanSport","JinSeng"],
        a:2
    }
]

function displayQuestion () {
    question.textContent = questionlist[currentQuestion].q
    button1.textContent = questionlist[currentQuestion].c[0]
    button2.textContent = questionlist[currentQuestion].c[1]
    button3.textContent = questionlist[currentQuestion].c[2]
    button4.textContent = questionlist[currentQuestion].c[3]
}

function optionHandler() {
    var userValue = this.getAttribute("data-value")
    if (userValue == questionlist[currentQuestion].a) {
        result.textContent = "Correct";
        grade += 10;
        score.textContent = grade;
    }else{
        result.textContent = "Wrong";
        timer -= 10;
        score.textContent = grade;
    }
    if(currentQuestion < questionlist.length - 1) {
        currentQuestion ++;
        displayQuestion()
    } else{
        alert("Quiz is completed.")
    }
}








bgnQuiz.addEventListener("click", startBtnHandler)
button1.addEventListener("click", optionHandler)
button2.addEventListener("click", optionHandler)
button3.addEventListener("click", optionHandler)
button4.addEventListener("click", optionHandler)