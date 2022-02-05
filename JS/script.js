confirm("Are you ready to take the test?")

// This function stores the answer of the test questions
function submitButton(){
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
    if (correctAnswer1 == "B")(score ++);
    if (correctAnswer2 == "A")(score ++);
    if (correctAnswer3 == "C")(score ++);
    if (correctAnswer4 == "C")(score ++);
    if (correctAnswer5 == "B")(score ++);
    if (correctAnswer6 == "D")(score ++);
    if (correctAnswer7 == "D")(score ++);
    if (correctAnswer8 == "C")(score ++);
    questions.style.display="none";
    result.textContent= score;

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

    var scorePercent = (Math.floor(score * 100/8));
    if (scorePercent >= 80){
        result.textContent= score +  " answers correct out of 8.Congratulations! You have scored " + scorePercent + "%.  EXCELLENT!!!";
    } else if (scorePercent >= 50) {
        result.textContent="Congratulations, You have scored " + scorePercent + "% . FAIR!";
    } else {
        result.textContent="You have scored " + scorePercent + "%.  FAILED. RETAKE THE TEST!";
    }
};

