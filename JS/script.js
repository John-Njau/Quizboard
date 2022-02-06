confirm("Click 'OK' if you are ready to take the test.")


// This function stores the answer of the test questions
function submitButton() {
    var score = 0;
    const correctAnswer1 = document.first.question1.value;  //.required= true
    const correctAnswer2 = document.first.question2.value;
    const correctAnswer3 = document.first.question3.value;
    const correctAnswer4 = document.first.question4.value;
    const correctAnswer5 = document.first.question5.value;
    const correctAnswer6 = document.first.question6.value;
    const correctAnswer7 = document.first.question7.value;
    const correctAnswer8 = document.first.question8.value;
    // var questions= getElementById("questions");
    var result = document.getElementById("text");
    if (correctAnswer1 == "B") (score++);
    if (correctAnswer2 == "A") (score++);
    if (correctAnswer3 == "C") (score++);
    if (correctAnswer4 == "C") (score++);
    if (correctAnswer5 == "B") (score++);
    if (correctAnswer6 == "D") (score++);
    if (correctAnswer7 == "D") (score++);
    if (correctAnswer8 == "C") (score++);
    questions.style.display = "none";
    // var img = document.createElement("img");
    // img.src = "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    // document.write('<img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94"')
    result.textContent = score;
    result.style.color = "#fff";
    result.style.fontSize = "30px";
    result.style.fontWeight = "700";
    result.style.border = "none";
    // document.getElementById("result").style.backgroundImage ="url('/home/moringa/Documents/Moringa-projects/Quizboard-project/images/results-removebg-preview.png')";
    // result.style.innerHTML = "<img src='/home/moringa/Documents/Moringa-projects/Quizboard-project/images/results-removebg-preview.png'>";

    // result.textContent=score + " answers correct out of 8.";
    // function percentage(){

    // var scorePercent = (Math.floor(score * 100/8));
    // if (scorePercent >= 80){
    // document.write("Congratulations! You have scored " + scorePercent + "%.  EXCELLENT!!!");
    // } else if (scorePercent >= 50) {
    //     document.write("Congratulations, You have scored " + scorePercent + "% . FAIR!");
    // } else {
    //     document.write("You have scored " + scorePercent + "%.  FAILED. RETAKE THE TEST!");
    // }

    var scorePercent = (Math.floor(score * 100 / 8));
    if (scorePercent >= 80) {
        result.textContent = score + "/8. Congratulations! You have scored " + scorePercent + "%.  EXCELLENT!!!";
    } else if (scorePercent >= 50) {
        result.textContent = score + "/8. Congratulations, You have scored " + scorePercent + "% . FAIR!";
    } else {
        result.textContent = score + "/8. Your Score " + scorePercent + "%.  FAILED. RETAKE THE TEST!";
        // result.style.color ="red";
    }
    $('#text').prepend('<img id="img" src="https://i.postimg.cc/rw7L81dP/results-removebg-preview.png" width="50%"/>'); 

};

var previousNextPage = document.getElementById("q1"); //try qn1
var pages = [document.getElementsById("qn1","qn2","qn3","qn4","qn5","qn6","qn7","qn8")];
var i = 0; //current page index.
// var pages = 

function previous(){
    if (i <=0) (i = pages.length); i--;
    return newPage();
}

function next(){ 
    if (i >= pages.length -1) i=-1; i++;
    return newPage();
}

function newPage(){
    return previousNextPage.setAttribute("q1", "q1" + pages[i]);
}

