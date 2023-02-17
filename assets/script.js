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

//current reference to the index position of the questionArray. It begins at 0
var current = 0

//////////////////////////////////////////////////////////////////////////


//questionLoader function is
function questionLoader(event){


    var startTime = 30
setInterval(function(){
startTime = startTime-1
console.log(startTime)
},1000)
    
    var currentQuestion = questionArray[current]
    //finds an selects the current question

    //takes the title from the current question
    var questionTitle = currentQuestion.title;
    console.log(questionTitle);

    var titlePlacement = document.querySelector("#title");
    console.log (titlePlacement);

    titlePlacement.textContent = questionTitle;


    //takes the options from the currentQuestion
    var questionOptions = currentQuestion.options;
    console.log(questionOptions);

    var optionAplacement = document.querySelector("#questionA");
    optionAplacement.textContent = questionOptions[0];
   

    //I want to seperate the question options so that each option is listed on a seperate row (in a column)


    current ++;

    checkResponse(event)

    return
    
    //userChoice = whatever choiceBtn they picked. Compare button id to 'answer' in currentQuestion. If === true, else false
    
}

function checkResponse(event){
    var input = event.target
    var correctAnswer = questionArray[current].answer

    if (input.textContent === correctAnswer){


    }



}


var choiceBtn = document.querySelector(".choiceBtn")

choiceBtn.addEventListener("click",questionLoader)



//Record final score
//use storage.set item("score","")

//get score from local storage and display under score.