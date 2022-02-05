// This function stores the answer of the test questions
function submitButton(){
    var score = 0;
    var correctAnswer1 = document.first.question1.value;
    var correctAnswer2 = document.first.question2.value;
    var correctAnswer3 = document.first.question3.value;
    var correctAnswer4 = document.first.question4.value;
    var correctAnswer5 = document.first.question5.value;
    var correctAnswer6 = document.first.question6.value;
    var correctAnswer7 = document.first.question7.value;
    var correctAnswer8 = document.first.question8.value;
    if (correctAnswer1 == "B")(score +=10);
    if (correctAnswer2 == "A")(score +=10);
    if (correctAnswer3 == "C")(score +=10);
    if (correctAnswer4 == "C")(score +=10);
    if (correctAnswer5 == "B")(score +=10);
    if (correctAnswer6 == "D")(score +=10);
    if (correctAnswer7 == "D")(score +=10);
    if (correctAnswer8 == "C")(score +=10);
    document.write(score);
}