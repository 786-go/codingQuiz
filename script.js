var bgnQuiz = document.querySelector("#btn")
var quizArea = document.getElementById("quizarea")
quizArea.style.display = "none"
var timer = 120;
var timerObject;
var counter = document.getElementById("counter")
var startBtnHandler = function () {
    bgnQuiz.style.display = "none"
    quizArea.style.display = "block"
    timerObject = setInterval(function () {
        counter.textContent = "time left" + timer
        
        if(timer > 1) {
            timer--;
        }else {
            clearInterval(timerObject)
        }
    },1000)
};




// var questionlist = [ 
//     {
//         q:"",
//         c:["o1","o2","o3","o4"]
//         a:4
//     }
// ]






















bgnQuiz.addEventListener("click", startBtnHandler)