let score = 0;
let scoreBox = document.getElementById("score");
let questionBox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");

function setAdditionGame(){
    answerForm.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame(){
    answerForm.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame(){
    answerForm.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function checkAnswer(){
    let gametype = answerForm.getAttribute("data-gametype");
    if (answerForm["answer"].value == answerForm["rightAnswer"].value){
        alert("Hey! You got it right!");
        score++;
    } else{
        alert("Oh no! A wrong Answer :( ");
    }
    answerForm["answer"].value = "";
    scoreBox.textContent=score;
    if (gametype == "addition"){
        additionQuiz()
    }else if (gametype == "subtraction"){
        subtractionQuiz()
    }else if (gametype == "multiplication"){
        multiplicationQuiz()
    }
    return false; // this prevents the refresh
}

function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50); //Math.floor() - rounds something down to nearest integer
    let num2 = Math.floor(Math.random() * 50); //Math.random()*50 - random number between 0 and 50
    
    questionBox.textContent = num1+ " + "+num2+" ?";
    answerForm["rightAnswer"].value = (num1+num2);
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 20); //Math.floor() - rounds something down to nearest integer
    let num2 = Math.floor(Math.random() * 10); //Math.random()*50 - random number between 0 and 50
    
    questionBox.textContent = num1+ " x "+num2+" ?";
    answerForm["rightAnswer"].value = (num1*num2);
}

function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * 50); //Math.floor() - rounds something down to nearest integer
    let num2 = Math.floor(Math.random() * 50); //Math.random()*50 - random number between 0 and 50
    
    questionBox.textContent = Math.max(num1,num2)+ " - "+Math.min(num1,num2)+" ?";
    answerForm["rightAnswer"].value = (Math.max(num1,num2) - Math.min(num1,num2));
}


additionQuiz();  //here for when the page first opens

