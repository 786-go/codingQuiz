var bgnQuiz = document.querySelector("#btn")
var quizArea = document.getElementById("quizarea")
var question = document.getElementById("question")
var button1 = document.getElementById("opt1")
var button2 = document.getElementById("opt2")
var button3 = document.getElementById("opt3")
var button4 = document.getElementById("opt4")
var result = document.getElementById("right-wrong")
var currentQuestion = 0
var grade = 0
var endResults = document.getElementById("end-results")
var userInitials = document.getElementById("user-initials")
var saveInitials = document.getElementById("save-initials")

var timer = 50;
var timerObject;
var counter = document.getElementById("counter")

quizArea.style.display = "none"
endResults.style.display = "none"

var startBtnHandler = function () {
    counter.textContent = "Time Left: " + timer + "s"
 
    timerObject = setInterval(function () {
        counter.textContent = "Time Left: " + timer + "s"
        
        if(timer > 0) {
            timer--;
        } else {
            clearInterval(timerObject)
            counter.textContent = "Time's up!"
            displayResults()
        }
    },1000)
    bgnQuiz.style.display = "none"
    quizArea.style.display = "block"
    displayQuestion();
};




var questionlist = [ 
    {
        q:"1) Which of the following is not a JavaScript framework?",
        c:["Node","Vue","Ruby","React"],
        a:3
    },
    {
        q:"2) What symbol is used to signify comments in JavaScript?",
        c:["/* */","//","#","$ $"],
        a:2
    },
    {
        q:"3) The argument of a function is written inside of which pair of symbols?",
        c:["' '","( )","{ }","[ ]"],
        a:2
    }, {
        q:"4) The use of [ ] signifies which type of data storage?",
        c:["object","array","constant","list"],
        a:2
    },
    {
        q:"5) What does '&&' mean?",
        c:["and","or","for all","&& doesn't exist in JavaScript"],
        a:1
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
    } else{
        result.textContent = "Wrong";
        timer -= 10;
    }

    if(currentQuestion < questionlist.length - 1) {
        currentQuestion ++;
        displayQuestion()
    } else{
        clearInterval(timerObject)
        counter.textContent = "You've completed the quiz!"
        displayResults()
    }
}



function displayResults() {
    endResults.style.display = "block"
    quizArea.style.display = "none"
    document.querySelector("#final-score").textContent = "Your final score is " + grade + "."
}



function saveScores() {
    var userScores = JSON.parse(localStorage.getItem("initials")) || []
    var user = document.getElementById("user-initials").value
    userScores.push({user:user,score:grade})
    localStorage.setItem("initials", JSON.stringify(userScores))
    endResults.style.display = "none"
    var allScores = ""
    for (let i = 0; i < userScores.length; i++) {
        allScores += `<h6> ${userScores[i].user} scored ${userScores[i].score}/50 </h6>`
    }
    
    document.getElementById("all-scores").innerHTML = allScores
    counter.textContent = "ALL SCORES"
}




bgnQuiz.addEventListener("click", startBtnHandler)
button1.addEventListener("click", optionHandler)
button2.addEventListener("click", optionHandler)
button3.addEventListener("click", optionHandler)
button4.addEventListener("click", optionHandler)
saveInitials.addEventListener("click", saveScores)