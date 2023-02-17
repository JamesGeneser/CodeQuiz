var questionArray = [
    {
        title: "What does the Math.random method generate?",
        options: ["A random whole number","A random number between 1 and 2 ","A random number between 0 and 1","A random integer"],
        answer: "C"
    },
    {
        title: "'i ++' is the same thing as:",
        options: ["'i=1+1'","'i=i+i'","'i=i+2'","'i=i+1'"],
        answer: "D"
    },
    {
        title: "'element.textContent' In this example, '.textContent' is an example of a(n):",
        options: ["method","object","class","selector"],
        answer: "A"
    },
    {
        title: "Question 4",
        options: ["A","B","C","D"],
        answer: "correct answer"
    },
]

var startBtn = document.querySelector("#startBtn");
var timeEl = document.querySelector("#time")
var score = 0
var responseBox = document.querySelector("#checker")

//This function is waiting for the startBtn to be clicked
startBtn.addEventListener("click", function(){ 
//changing the attribute of the welcomeBox changes it to hidden
    var element = document.getElementById("welcome");
    element.removeAttribute("class");
    element.setAttribute("class","welcomeBoxHide");
//changing the attribute of the questionBox makes it visible
    var qBox = document.getElementById("questionBox");
    qBox.removeAttribute("class");
    qBox.setAttribute("class","questionBoxShow");
    startBtn.setAttribute("class","startBtnHide"); 
//calls the questionLoader function
    questionLoader()
    
})
startBtn.addEventListener("click", function(){
var timeLeft = 30
setInterval(function(){
timeLeft = timeLeft-1
timeEl.textContent = timeLeft

if (timeLeft<25){
window.location.replace("../CodeQuiz/highscores.html")}

},1000)
})

//current reference to the index position of the questionArray. It begins at 0
var current = 0

//////////////////////////////////////////////////////////////////////////



function questionLoader(event){

    var responseBoxVisibility = responseBox.getAttribute
    console.log(responseBoxVisibility)
    if (responseBoxVisibility = "checkResponseHidden"){
        responseBox.removeAttribute
        responseBox.setAttribute("class","checkResponseShown")
    }
    
    var currentQuestion = questionArray[current]
    //finds an selects the current question

    //takes the title from the current question
    var questionTitle = currentQuestion.title;
    
    var titlePlacement = document.querySelector("#title");
    
    titlePlacement.textContent = questionTitle;


    //question options
    var questionOptions = currentQuestion.options;
    
    var optionAplacement = document.querySelector("#questionA");
    optionAplacement.textContent = questionOptions[0];

    var optionBplacement = document.querySelector("#questionB");
    optionBplacement.textContent = questionOptions[1];

    var optionCplacement = document.querySelector("#questionC");
    optionCplacement.textContent = questionOptions[2];

    var optionDplacement = document.querySelector("#questionD");
    optionDplacement.textContent = questionOptions[3];
   





    function checkResponse(event){
        var input = event.target
        console.log(input)
        var correctAnswer = questionArray[current].answer
        console.log(correctAnswer)
        var right = input.textContent
        console.log(right)
        var responseMessage = document.querySelector("#checker")
        

        if (right === correctAnswer){
            console.log("correct!")
            responseMessage.textContent = "Correct"
            score ++
        }else { console.log("incorrect")
            responseMessage.textContent = "Incorrect"
        }
        setTimeout(hideResponse, 2000);
    }

    localStorage.setItem("score",score)
    console.log(score)



    function hideResponse(){
        
        responseBox.removeAttribute("class")
        responseBox.setAttribute("class","checkResponseHidden")
        var responseMessage = document.querySelector("#checker")
        responseMessage.textContent = ""
    }


    


    checkResponse(event)




    current ++;
    questionLoader()
    
    
    //userChoice = whatever choiceBtn they picked. Compare button id to 'answer' in currentQuestion. If === true, else false
 
    









}







// var choiceBtn = document.querySelectorAll(".choiceBtn")

// console.log(choiceBtn)
// choiceBtn.addEventListener("click", checkResponse())




var choiceBtnA = document.querySelector("#A")
choiceBtnA.addEventListener("click",questionLoader)

var choiceBtnB = document.querySelector("#B")
choiceBtnB.addEventListener("click",questionLoader)

var choiceBtnC = document.querySelector("#C")
choiceBtnC.addEventListener("click",questionLoader)

var choiceBtnD = document.querySelector("#D")
choiceBtnD.addEventListener("click",questionLoader)



//Record final score
//use storage.set item("score","")

//get score from local storage and display under score.