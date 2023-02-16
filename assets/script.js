var questionArray = [
    {
        title: "Question 1:question contents",
        options: ["A and some text","B and some text","C and some text","D and some text"],
        answer: "C"
    },
    {
        title: "Question",
        options: ["A","B","C","D"],
        answer: "correct answer"
    },
    {
        title: "Question",
        options: ["A","B","C","D"],
        answer: "correct answer"
    },
    {
        title: "Question",
        options: ["A","B","C","D"],
        answer: "correct answer"
    },
]
var title = document.querySelector("#title");

var welcomeBox = document.querySelector("#welcomeBox");
var startBtn = document.querySelector("#startBtn")
var questionSection = document.querySelector("#questions")




startBtn.addEventListener("click", function(){ 
  
    var element = document.getElementById("welcome");
   
    element.removeAttribute("class");

    element.setAttribute("class","welcomeBoxHide");

    var qBox = document.getElementById("questionBox");
    qBox.removeAttribute("class");
    qBox.setAttribute("class","questionBoxShow");

    startBtn.setAttribute("class","startBtnHide")

    
    
    var currentQuestion = questionArray[0]
    
    var questionTitle = currentQuestion.title
    
    var questionOptions = currentQuestion.options
    
    console.log(questionTitle)
    console.log(questionOptions)
    
    document.querySelector("#title") = questionTitle;
    h3.append(questionTitle)
    
    
    
    
    
    
    
    
    
    
    
    // var x = document.querySelector("#title")

    // x = questions[0];

    // var questionTitle = JSON.stringify(x)
    
    // console.log(questionTitle);

    // var test = x.title

    // console.log(test)
    


})




// var question1 = (questions[0])
// console.log = question1